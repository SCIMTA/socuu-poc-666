import { getCaseBySlug, getCategoryBySlug } from "@/lib/data";
import type { EmergencySection } from "@/lib/types";
import { ArrowLeft, AlertTriangle, Phone, Info, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SectionImage({ src, alt, compact }: { src: string; alt: string; compact?: boolean }) {
  return (
    <div className={`relative rounded-xl overflow-hidden bg-white border border-slate-100 ${compact ? "h-40 w-full" : "h-48 w-full"}`}>
      <Image src={src} alt={alt} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 400px" />
    </div>
  );
}

function SectionRenderer({ section, caseTitle }: { section: EmergencySection; caseTitle: string }) {
  switch (section.type) {
    case "warning":
      return (
        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-xl">
          <div className="flex gap-2.5">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              {section.title && <p className="font-bold text-red-700 text-base">{section.title}</p>}
              {section.content && <p className="text-red-700 font-medium text-[15px] leading-relaxed whitespace-pre-line">{section.content}</p>}
              {section.items && (
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-red-700 font-medium text-[15px] leading-relaxed">✕ {item}</li>
                  ))}
                </ul>
              )}
              {section.imageUrl && <SectionImage src={section.imageUrl} alt={section.title || caseTitle} compact />}
            </div>
          </div>
        </div>
      );

    case "definition":
      return (
        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
          {section.title && <h3 className="font-bold text-slate-900 text-lg mb-2">{section.title}</h3>}
          <p className="text-slate-700 text-[15px] leading-relaxed">{section.content}</p>
          {section.imageUrl && (
            <div className="flex justify-center mt-3">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-white border border-slate-100">
                <Image src={section.imageUrl} alt={section.title || caseTitle} fill className="object-contain p-1" sizes="128px" />
              </div>
            </div>
          )}
        </div>
      );

    case "info":
      return (
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
          <div className="flex gap-2.5">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              {section.title && <p className="font-bold text-blue-800 text-base">{section.title}</p>}
              {section.content && <p className="text-blue-700 text-[15px] leading-relaxed whitespace-pre-line">{section.content}</p>}
              {section.items && (
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-blue-700 text-[15px] leading-relaxed">• {item}</li>
                  ))}
                </ul>
              )}
              {section.imageUrl && <SectionImage src={section.imageUrl} alt={section.title || caseTitle} compact />}
            </div>
          </div>
        </div>
      );

    case "signs":
      return (
        <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
          <div className="flex gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              {section.title && <p className="font-bold text-amber-800 text-base">{section.title}</p>}
              {section.content && <p className="text-amber-700 text-[15px] leading-relaxed">{section.content}</p>}
              {section.items && (
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-amber-700 text-[15px] leading-relaxed">⚠ {item}</li>
                  ))}
                </ul>
              )}
              {section.imageUrl && <SectionImage src={section.imageUrl} alt={section.title || caseTitle} />}
            </div>
          </div>
        </div>
      );

    case "steps":
      return (
        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
          {section.title && (
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <h3 className="font-bold text-slate-900 text-base">{section.title}</h3>
            </div>
          )}
          {section.stepItems && (
            <div className="space-y-4">
              {section.stepItems.map((step, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-800 text-[15px] leading-relaxed flex-1 pt-0.5">{step.text}</p>
                  </div>
                  {step.imageUrl && (
                    <div className="ml-10">
                      <SectionImage src={step.imageUrl} alt={`Bước ${i + 1}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {section.items && !section.stepItems && (
            <div className="space-y-3">
              {section.items.map((step, i) => (
                <div key={i} className="flex gap-2.5">
                  <div className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-800 text-[15px] leading-relaxed flex-1 pt-0.5 whitespace-pre-line">{step}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case "notes":
      return (
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
          {section.title && <p className="font-bold text-slate-800 text-base mb-2">{section.title}</p>}
          {section.content && <p className="text-slate-600 text-[15px] leading-relaxed">{section.content}</p>}
          {section.items && (
            <ul className="space-y-1.5">
              {section.items.map((item, i) => (
                <li key={i} className="text-slate-600 text-[15px] leading-relaxed">📌 {item}</li>
              ))}
            </ul>
          )}
        </div>
      );

    default:
      return null;
  }
}

export default async function AidDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const emergencyCase = getCaseBySlug(slug);
  const category = getCategoryBySlug(slug);

  if (!emergencyCase) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 px-4 py-10">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
          <h1 className="text-xl font-bold text-slate-900 mb-2">Không tìm thấy hướng dẫn</h1>
          <p className="text-slate-600 text-base mb-6">Vui lòng quay lại trang chủ.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold text-base transition-transform active:scale-95"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative pb-24">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 h-14 flex items-center gap-3 shadow-sm">
        <Link
          href="/"
          className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-transform active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </Link>
        <h1 className="text-base font-bold text-slate-900 truncate flex-1">
          {emergencyCase.title}
        </h1>
        {category?.severity === "critical" && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-2 py-0.5 rounded-full shrink-0">
            Khẩn cấp
          </span>
        )}
      </header>

      <main className="flex-1 p-4 flex flex-col gap-3">
        {emergencyCase.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} caseTitle={emergencyCase.title} />
        ))}
      </main>

      <a
        href="tel:115"
        className="fixed bottom-5 right-5 w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 z-50 animate-pulse"
        aria-label="Gọi 115 khẩn cấp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
