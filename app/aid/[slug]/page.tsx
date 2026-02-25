import { getCaseBySlug } from "@/lib/data";
import { ArrowLeft, AlertTriangle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AidDetailPage({ params }: { params: { slug: string } }) {
  const emergencyCase = getCaseBySlug(params.slug);

  if (!emergencyCase) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 px-4 py-10">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Không tìm thấy hướng dẫn</h1>
          <p className="text-slate-600 mb-6">Vui lòng quay lại trang chủ để chọn tình huống khác.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-4 py-2 font-semibold transition-transform active:scale-95"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative pb-24">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 h-16 flex items-center gap-3 shadow-sm">
        <Link
          href="/"
          className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-transform active:scale-95"
        >
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 truncate flex-1">
          {emergencyCase.title}
        </h1>
      </header>

      <main className="flex-1 p-4 flex flex-col gap-6">
        <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-xl flex gap-3">
          <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
          <p className="text-red-700 font-bold leading-relaxed">{emergencyCase.warning}</p>
        </div>

        <div className="space-y-6">
          {emergencyCase.steps.map((step) => (
            <div key={step.id} className="flex gap-4">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                {step.id}
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium leading-relaxed text-slate-800 mb-3">
                  {step.text}
                </p>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src={step.imageUrl}
                    alt={`${emergencyCase.title} - Bước ${step.id}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <a
        href="tel:115"
        className="fixed bottom-6 right-6 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
        aria-label="Gọi 115 khẩn cấp"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}
