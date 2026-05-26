"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-[#020106] border-t border-slate-950/80 font-mono text-[10px] md:text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 select-none">
            <Cpu className="w-4 h-4 text-cyan-500/50" />
            <span>DESIGNED & ENGINEERED BY SRUJAN LAKKU</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <span>BUILDING SCALABLE AI SYSTEMS</span>
            <span>|</span>
            <span>© {currentYear} ALL RIGHT RESERVED</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
