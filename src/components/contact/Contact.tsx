"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Github, Linkedin, ShieldAlert, Cpu } from "lucide-react";
import ResumeButton from "../resume/ResumeButton";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [statusText, setStatusText] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Simulated connection sequences on mount
    const logs = [
      "Securing transport handshake protocol...",
      "Neural Communication Channel Active.",
      "Awaiting Incoming Connections..."
    ];
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < logs.length) {
        setStatusText((prev) => [...prev, logs[idx]]);
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 850);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate terminal response upon submit
    setStatusText((prev) => [...prev, `Handshake received from ${formData.name.toUpperCase()}...`]);

    setTimeout(() => {
      setStatusText((prev) => [
        ...prev,
        "Encrypting text stream vectors...",
        "Transmission successfully piped. Connection terminated."
      ]);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Terminal className="w-4 h-4 text-cyan-400" />
            COMMUNICATION_Handshake_PROTOCOL
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            Initiate Connection
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-[#A855F7] mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Open an encrypted vector channel to collaborate, discuss architectures, or coordinate interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* LEFT SIDE: Sleek Glassmorphism Form - 6 Columns */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 md:p-8 rounded-lg border border-slate-800/80 flex flex-col gap-5 h-full relative"
            >
              {/* Form border lights */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-slate-800" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-slate-800" />

              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  SENDER_NAME_VECTOR
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Srujan Lakku"
                  required
                  className="px-4 py-3 bg-slate-950/70 border border-slate-900 rounded font-sans text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  SENDER_EMAIL_ADDR
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="lakkusrujan@gmail.com"
                  required
                  className="px-4 py-3 bg-slate-950/70 border border-slate-900 rounded font-sans text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  TRANSMISSION_PAYLOAD
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write message details..."
                  rows={5}
                  required
                  className="px-4 py-3 bg-slate-950/70 border border-slate-900 rounded font-sans text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-3.5 bg-gradient-to-r from-cyan-400 to-[#A855F7] text-slate-950 font-mono text-xs font-bold tracking-widest uppercase rounded hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all flex items-center justify-center gap-2 select-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "TRANSMITTING..." : "PIPE PAYLOAD"}</span>
              </button>
            </motion.form>
          </div>

          {/* RIGHT SIDE: AI Communication Terminal - 6 Columns */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel-purple p-6 md:p-8 rounded-lg border border-purple-500/10 flex flex-col justify-between h-full font-mono relative"
            >
              {/* Terminal borders */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-[#A855F7]/30" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-[#A855F7]/30" />

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#A855F7]/10 pb-3">
                  <div className="flex items-center gap-2 text-xs">
                    <Terminal className="w-4 h-4 text-[#A855F7] animate-pulse" />
                    <span className="text-slate-300 font-bold">LAKKU_OS_TRANSCEIVER</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]/60" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]/30" />
                  </div>
                </div>

                {/* Console Log outputs */}
                <div className="space-y-2 text-xs text-[#A855F7]/90 min-h-[160px] text-left">
                  {statusText.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span>&gt;&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  <span className="inline-block w-2.5 h-3.5 bg-[#A855F7] animate-pulse" />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-6 border-t border-[#A855F7]/10 w-full">
                <div className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                  COMMUNICATION_SHORTCUT_BADGES
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <ResumeButton variant="contact" />
                  
                  <div className="flex gap-2 w-full sm:w-auto">
                    <a
                      href="https://github.com/srujanlakku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial p-4 bg-slate-950 border border-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 rounded transition-all shadow-md flex items-center justify-center"
                      aria-label="GitHub Link"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/srujan-lakku/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial p-4 bg-slate-950 border border-slate-900 text-slate-400 hover:text-[#A855F7] hover:border-[#A855F7]/30 rounded transition-all shadow-md flex items-center justify-center"
                      aria-label="LinkedIn Link"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
