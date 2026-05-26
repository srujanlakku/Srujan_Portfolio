"use client";

import { motion } from "framer-motion";
import { Award, ShieldAlert, Cpu } from "lucide-react";
import { certificationsData } from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-[#A855F7]" />
            ACCREDITATION_AUTHENTICATION_LOGS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            Professional Credentials
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-[#A855F7] mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Verified academic credentials, software methodologies, and specialized technical certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative flex flex-col p-5 rounded-lg bg-slate-950/40 border border-slate-900/80 hover:border-cyan-500/20 transition-all select-none hover:-translate-y-0.5"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-slate-800 group-hover:border-cyan-500/40" />
              <div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-slate-800 group-hover:border-cyan-500/40" />

              {/* Award Header */}
              <div className="flex items-start gap-4 text-left">
                <div className="p-2.5 bg-slate-950 border border-slate-900 text-cyan-400 rounded group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-[#A855F7] uppercase tracking-widest font-bold">
                    {cert.category}
                  </span>
                  <h3 className="font-display font-bold text-sm md:text-base text-white group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-slate-400 font-bold">
                    <span>ISSUER:</span>
                    <span className="text-slate-300">{cert.issuer}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="font-mono text-[9px] text-slate-500 font-bold">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              </div>

              {/* Badge timestamp */}
              <div className="mt-4 pt-3 border-t border-slate-950 text-right font-mono text-[9px] text-slate-500 uppercase font-bold">
                COMPLETED: {cert.date}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
