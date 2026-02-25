"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Mic, Phone, Menu, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/lib/data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = CATEGORIES.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen pb-8">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-lg font-bold text-slate-900 tracking-tight">Sơ Cấp Cứu</h1>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <Menu className="w-5 h-5 text-slate-600" />
        </button>
      </header>

      <main className="flex-1 px-4 pt-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <Input
            type="text"
            className="w-full h-12 pl-10 pr-10 text-[15px] rounded-xl bg-white shadow-sm border-slate-200 focus-visible:ring-primary placeholder:text-slate-400"
            placeholder="Bạn cần sơ cứu gì? (VD: Bỏng...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Mic className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* SOS Button */}
        <Button
          variant="destructive"
          className="w-full h-14 text-lg font-bold uppercase rounded-xl shadow-lg shadow-red-500/20 animate-[pulse_2s_ease-in-out_infinite] flex gap-2.5 transition-transform active:scale-95"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.href = "tel:115";
            }
          }}
        >
          <Phone className="w-5 h-5 fill-current" />
          GỌI 115 KHẨN CẤP
        </Button>

        {/* Category Grid */}
        <div>
          <h2 className="text-[15px] font-semibold text-slate-700 mb-3 px-0.5">
            Tình huống cấp cứu ({filteredCategories.length})
          </h2>

          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-3 gap-2.5">
              {filteredCategories.map((category) => (
                <Link
                  href={`/aid/${category.slug}`}
                  key={category.id}
                  className="bg-white rounded-xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-slate-100 hover:border-primary/20 hover:shadow-md cursor-pointer transition-all active:scale-95 min-h-[120px]"
                >
                  <div className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center overflow-hidden border border-slate-100`}>
                    <div className="relative w-10 h-10">
                      <Image
                        src={category.iconPath}
                        alt={category.title}
                        fill
                        className="object-contain"
                        sizes="40px"
                      />
                    </div>
                  </div>
                  <span className="font-semibold text-slate-800 text-center text-xs leading-tight line-clamp-2">
                    {category.title}
                  </span>
                  {category.severity === "critical" && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-1.5 py-0.5 rounded-full leading-none">
                      Nguy hiểm
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 px-4 bg-white rounded-xl border border-slate-100 border-dashed">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-500 text-base">Không tìm thấy &quot;{searchQuery}&quot;</p>
              <p className="text-slate-400 text-sm mt-1">Hãy thử từ khóa khác</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
