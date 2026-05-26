"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const BOOT_STEPS = [
  "Initializing Agentic AI Runtime...",
  "Loading LangGraph Nodes & State Routing...",
  "Connecting Vector Databases & Retrieving Embeddings...",
  "Deploying Neural AI Dashboard Interface...",
  "System Connection Established. Ready."
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentStep < BOOT_STEPS.length) {
      const stepTimer = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, BOOT_STEPS[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      }, 550);

      return () => clearTimeout(stepTimer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [currentStep, onComplete]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-[#020108] flex flex-col items-center justify-center p-6 scanline-overlay select-none"
    >
      <div className="max-w-md w-full glass-panel-neon p-6 rounded-lg relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-[#00D4FF]/5 rounded-full blur-[60px]" />
        
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 tracking-wider font-bold">LAKKU_AI_SYSTEM_OS v2.0.46</span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
        </div>

        <div className="font-mono text-sm text-cyan-400/90 space-y-2 mb-6 min-h-[140px]">
          {visibleSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2"
            >
              <span className="text-[#A855F7] font-bold select-none">&gt;&gt;</span>
              <span>{step}</span>
            </motion.div>
          ))}
          {currentStep < BOOT_STEPS.length && (
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between font-mono text-xs text-slate-400">
            <span>CORE COGNITIVE LOAD</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
