"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search, Mic, Phone, Menu, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock Data cho danh mục sơ cứu
const CATEGORIES = [
  { id: 1, title: "Bỏng", slug: "burns", iconPath: "/icons/burn.svg", bgColor: "bg-orange-50" },
  { id: 2, title: "Ngừng tim/CPR", slug: "cpr", iconPath: "/icons/cpr.svg", bgColor: "bg-red-50" },
  { id: 3, title: "Hóc dị vật", slug: "choking", iconPath: "/icons/choking.svg", bgColor: "bg-blue-50" },
  { id: 4, title: "Gãy xương", slug: "fracture", iconPath: "/icons/bone.svg", bgColor: "bg-slate-50" },
  { id: 5, title: "Rắn cắn", slug: "snake-bite", iconPath: "/icons/snake.svg", bgColor: "bg-green-50" },
  { id: 6, title: "Đuối nước", slug: "drowning", iconPath: "/icons/drowning.svg", bgColor: "bg-cyan-50" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Lọc danh mục dựa trên từ khóa tìm kiếm
  const filteredCategories = CATEGORIES.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen pb-8">
      {/* Header (Sticky) */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Sơ Cấp Cứu</h1>
        </div>
        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <Menu className="w-6 h-6 text-slate-600" />
        </button>
      </header>

      <main className="flex-1 px-4 pt-6 space-y-6">
        {/* Search Section */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <Input
            type="text"
            className="w-full h-14 pl-12 pr-12 text-lg rounded-2xl bg-white shadow-sm border-slate-200 focus-visible:ring-primary placeholder:text-slate-400"
            placeholder="Bạn cần sơ cứu gì? (VD: Bỏng...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <Mic className="h-5 w-5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* SOS Button (Critical) */}
        <Button 
          variant="destructive" 
          className="w-full h-16 text-xl font-bold uppercase rounded-2xl shadow-lg shadow-red-500/20 animate-[pulse_2s_ease-in-out_infinite] flex gap-3 transition-transform active:scale-95"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.location.href = "tel:115"
            }
          }}
        >
          <Phone className="w-6 h-6 fill-current" />
          GỌI 115 KHẨN CẤP
        </Button>

        {/* Category Grid */}
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-4 px-1">Tình huống thường gặp</h2>
          
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredCategories.map((category) => (
                <Link
                  href={`/aid/${category.slug}`}
                  key={category.id}
                  className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-md border border-slate-100 hover:border-primary/20 hover:shadow-lg cursor-pointer transition-all hover:scale-105 active:scale-95"
                >
                  <div className={`p-4 rounded-full ${category.bgColor}`}>
                    <div className="relative w-16 h-16 flex-shrink-0 mb-4">
                      <Image
                        src={category.iconPath}
                        alt={category.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <span className="font-semibold text-slate-700 text-center leading-tight">
                    {category.title}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 bg-white rounded-2xl border border-slate-100 border-dashed">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-lg">Không tìm thấy hướng dẫn cho &quot;{searchQuery}&quot;</p>
              <p className="text-slate-400 mt-1">Hãy thử tìm với từ khóa khác</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
