"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

interface ResumeButtonProps {
  variant?: "navbar" | "hero" | "contact";
  className?: string;
}

export default function ResumeButton({ variant = "hero", className = "" }: ResumeButtonProps) {
  const resumePath = "/assets/resume/Srujan_Lakku_Resume.pdf";

  // Styles for different landing regions
  const styles = {
    navbar: "px-4 py-1.5 text-xs border border-cyan-500/30 text-cyan-400 bg-cyan-950/20 rounded-md hover:bg-cyan-500/20 transition-all font-mono tracking-wider flex items-center gap-1.5",
    hero: "relative group overflow-hidden px-6 py-3 font-mono text-sm tracking-widest text-cyan-400 uppercase border border-cyan-500/40 bg-cyan-950/10 rounded-sm hover:text-white transition-colors duration-300 flex items-center gap-2",
    contact: "w-full sm:w-auto relative group overflow-hidden px-8 py-4 font-mono text-sm tracking-widest text-[#A855F7] uppercase border border-[#A855F7]/40 bg-purple-950/10 rounded-sm hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
  };

  const currentStyle = styles[variant] || styles.hero;

  return (
    <motion.a
      href={resumePath}
      download="Srujan_Lakku_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${currentStyle} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Laser glare effect */}
      {variant !== "navbar" && (
        <>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[scanline_1.5s_ease-in-out_infinite]" />
          <span className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[8px] -z-10 ${
            variant === "hero" ? "bg-cyan-500/30" : "bg-[#A855F7]/30"
          }`} />
        </>
      )}

      {/* Button text */}
      <span className="flex items-center gap-2">
        {variant === "navbar" ? (
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
        ) : (
          <Download className={`w-4 h-4 transition-transform group-hover:translate-y-0.5 ${
            variant === "hero" ? "text-cyan-400" : "text-[#A855F7] group-hover:text-white"
          }`} />
        )}
        <span>{variant === "navbar" ? "RESUME" : "DOWNLOAD CV"}</span>
      </span>

      {/* Corner cybernetic ticks */}
      {variant !== "navbar" && (
        <>
          <span className={`absolute left-0 top-0 w-1.5 h-1.5 border-t border-l ${
            variant === "hero" ? "border-cyan-400" : "border-[#A855F7]"
          }`} />
          <span className={`absolute right-0 top-0 w-1.5 h-1.5 border-t border-r ${
            variant === "hero" ? "border-cyan-400" : "border-[#A855F7]"
          }`} />
          <span className={`absolute left-0 bottom-0 w-1.5 h-1.5 border-b border-l ${
            variant === "hero" ? "border-cyan-400" : "border-[#A855F7]"
          }`} />
          <span className={`absolute right-0 bottom-0 w-1.5 h-1.5 border-b border-r ${
            variant === "hero" ? "border-cyan-400" : "border-[#A855F7]"
          }`} />
        </>
      )}
    </motion.a>
  );
}
