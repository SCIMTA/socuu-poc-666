"""
Extract all images from the First Aid PDF, organized by topic/slug.
Each image is saved to public/images/aid/{slug}/ directory.
Also renders each content page as a high-res PNG for reference.
"""
import fitz  # PyMuPDF
import os
import json

PDF_PATH = r"D:\letmeyclear\socuu-poc-666\resource\116-cam-nang-so-cap-cuu-2-17180799460521533632662.pdf"
OUTPUT_BASE = r"D:\letmeyclear\socuu-poc-666\public\images\aid"
PAGES_OUTPUT = r"D:\letmeyclear\socuu-poc-666\public\images\pages"

# Page ranges for each topic (1-indexed from PDF)
TOPIC_PAGE_MAP = {
    "nguyen-tac-uu-tien": list(range(10, 14)),    # pages 10-13
    "di-vat-duong-tho": list(range(14, 16)),       # pages 14-15
    "chay-mau": [16],                                # page 16
    "soc-giam-the-tich": [17],                       # page 17
    "gay-xuong": list(range(18, 20)),                # pages 18-19
    "bong-gan": list(range(20, 22)),                 # pages 20-21
    "trat-khop": list(range(22, 24)),                # pages 22-23
    "di-ung": [24],                                   # page 24
    "cho-can": list(range(25, 27)),                  # pages 25-26
    "ran-can": list(range(27, 29)),                  # pages 27-28
    "ong-dot": list(range(29, 31)),                  # pages 29-30
    "dot-quy": list(range(31, 34)),                  # pages 31-33
    "duoi-nuoc": [34],                                # page 34
    "bong-phong": list(range(35, 38)),               # pages 35-37
    "dien-giat": list(range(38, 42)),                # pages 38-41
    "hoi-sinh-tim-phoi": list(range(42, 46)),        # pages 42-45
}

def extract_images():
    doc = fitz.open(PDF_PATH)
    
    # Create output directories
    os.makedirs(PAGES_OUTPUT, exist_ok=True)
    
    # Track all extracted images
    report = {}
    
    for slug, pages in TOPIC_PAGE_MAP.items():
        slug_dir = os.path.join(OUTPUT_BASE, slug)
        os.makedirs(slug_dir, exist_ok=True)
        report[slug] = {"pages": pages, "images": [], "page_renders": []}
        
        img_counter = 1
        
        for page_num in pages:
            page_idx = page_num - 1  # 0-indexed
            page = doc[page_idx]
            
            # 1. Extract embedded images from this page
            images = page.get_images(full=True)
            for img_idx, img_info in enumerate(images):
                xref = img_info[0]
                try:
                    base_image = doc.extract_image(xref)
                    if base_image:
                        img_ext = base_image["ext"]
                        img_bytes = base_image["image"]
                        img_width = base_image["width"]
                        img_height = base_image["height"]
                        
                        # Skip tiny images (likely decorative elements)
                        if img_width < 20 or img_height < 20:
                            continue
                        
                        img_filename = f"img-{img_counter}.{img_ext}"
                        img_path = os.path.join(slug_dir, img_filename)
                        
                        with open(img_path, "wb") as f:
                            f.write(img_bytes)
                        
                        report[slug]["images"].append({
                            "filename": img_filename,
                            "page": page_num,
                            "width": img_width,
                            "height": img_height,
                            "size_kb": round(len(img_bytes) / 1024, 1)
                        })
                        
                        print(f"  [{slug}] Page {page_num}: Extracted {img_filename} ({img_width}x{img_height}, {round(len(img_bytes)/1024, 1)}KB)")
                        img_counter += 1
                except Exception as e:
                    print(f"  [{slug}] Page {page_num}: Error extracting image xref={xref}: {e}")
            
            # 2. Render the full page as PNG (high quality)
            mat = fitz.Matrix(2.5, 2.5)  # 2.5x zoom for high quality
            pix = page.get_pixmap(matrix=mat)
            page_filename = f"page-{page_num}.png"
            page_path = os.path.join(PAGES_OUTPUT, page_filename)
            pix.save(page_path)
            report[slug]["page_renders"].append(page_filename)
            print(f"  [{slug}] Rendered page {page_num} -> {page_filename}")
    
    doc.close()
    
    # Save report
    report_path = os.path.join(OUTPUT_BASE, "extraction_report.json")
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    # Summary
    total_images = sum(len(v["images"]) for v in report.values())
    total_renders = sum(len(v["page_renders"]) for v in report.values())
    print(f"\n=== EXTRACTION COMPLETE ===")
    print(f"Total topics: {len(report)}")
    print(f"Total extracted images: {total_images}")
    print(f"Total page renders: {total_renders}")
    print(f"Report saved to: {report_path}")

if __name__ == "__main__":
    extract_images()
