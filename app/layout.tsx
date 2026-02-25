import type { Metadata, Viewport } from "next";
import { OfflineBanner } from "@/components/OfflineBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sơ Cấp Cứu - Hướng dẫn khẩn cấp",
  description: "Tra cứu nhanh cách sơ cứu tai nạn thường gặp. Hoạt động Offline.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sơ Cấp Cứu",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased bg-slate-200">
        <main className="max-w-md mx-auto min-h-screen bg-slate-50 shadow-2xl relative overflow-x-hidden flex flex-col">
          <OfflineBanner />
          <div className="flex-1 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
