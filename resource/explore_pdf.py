"""
Script to explore the PDF structure and save output to file
"""
import fitz  # PyMuPDF
import json
import os

PDF_PATH = r"D:\letmeyclear\socuu-poc-666\resource\116-cam-nang-so-cap-cuu-2-17180799460521533632662.pdf"
OUTPUT_PATH = r"D:\letmeyclear\socuu-poc-666\resource\pdf_analysis.txt"

doc = fitz.open(PDF_PATH)

lines = []
lines.append(f"=== PDF INFO ===")
lines.append(f"Total pages: {doc.page_count}")

# 1. Table of Contents
toc = doc.get_toc()
lines.append(f"\n=== TABLE OF CONTENTS ({len(toc)} entries) ===")
for entry in toc:
    level, title, page = entry
    indent = "  " * (level - 1)
    lines.append(f"{indent}[Level {level}] Page {page}: {title}")

# 2. Extract text from ALL pages
lines.append(f"\n=== PAGE TEXT (all pages) ===")
for page_num in range(doc.page_count):
    page = doc[page_num]
    text = page.get_text("text").strip()
    images = page.get_images(full=True)
    lines.append(f"\n--- Page {page_num + 1} ---")
    lines.append(f"  Text length: {len(text)} chars")
    lines.append(f"  Images: {len(images)}")
    lines.append(f"  Full text:")
    lines.append(text)

doc.close()
lines.append("\n=== DONE ===")

with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"Analysis saved to {OUTPUT_PATH}")
