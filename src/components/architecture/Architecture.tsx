"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Cpu, Network, Database, Layers } from "lucide-react";

// Dynamically import the heavy Canvas/React Flow component to avoid hydration mismatches
const FlowDiagram = dynamic(() => import("./FlowDiagram"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[450px] bg-[#020108] border border-slate-900 rounded-lg flex flex-col items-center justify-center font-mono text-cyan-400 text-xs gap-3">
      <Cpu className="w-5 h-5 text-cyan-400 animate-spin" />
      <span>COMPILING NEURAL SCHEMATICS AND STATE CONNECTIONS...</span>
    </div>
  )
});

type TabType = "multi-agent" | "rag" | "fastapi";

export default function Architecture() {
  const [activeTab, setActiveTab] = useState<TabType>("multi-agent");

  const tabs = [
    { id: "multi-agent" as TabType, label: "MULTI-AGENT SCHEMATICS", icon: Network, desc: "Autonomous stateful multi-agent orchestrator conducting question routing, response evaluations, and consolidated report compilers." },
    { id: "rag" as TabType, label: "HIGH-FIDELITY RAG SCHEMATICS", icon: Database, desc: "Document ingestion processing combining context-aware text chunking, semantic cross-encoders, and high-performance vector retrieval." },
    { id: "fastapi" as TabType, label: "FASTAPI ASYNC GATEWAY", icon: Cpu, desc: "Fully asynchronous high-load API layers handling concurrent live WebSocket connections, background workers, and persistent databases." }
  ];

  return (
    <section id="architecture" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-[#EC4899] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4 text-[#EC4899]" />
            COGNITIVE_ARCHITECTURE_BLUEPRINTS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            System Orchestration Schematics
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Interactive blueprints of production infrastructure pipelines. Switch between tabs to explore active topologies.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TAB SIDE SELECTOR - 4 Columns */}
          <div className="lg:col-span-4 space-y-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 font-mono flex flex-col gap-2 relative overflow-hidden group select-none ${
                    isActive 
                      ? "bg-slate-900 border-cyan-500/30 text-white shadow-[0_0_15px_rgba(0,212,255,0.05)]" 
                      : "bg-slate-950/40 border-slate-900 text-slate-400 hover:bg-slate-900/50 hover:border-slate-800 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-cyan-400" />
                  )}
                  <div className="flex items-center gap-2">
                    <tab.icon className={`w-4 h-4 ${isActive ? "text-cyan-400 animate-pulse" : "text-slate-400 group-hover:text-slate-300"}`} />
                    <span className="text-xs font-bold tracking-wider">{tab.label}</span>
                  </div>
                  <p className="text-[11px] font-sans leading-relaxed text-slate-400 select-none">
                    {tab.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* ACTIVE DIAGRAM PANEL - 8 Columns */}
          <div className="lg:col-span-8 w-full h-[450px] lg:h-[500px] rounded-lg relative overflow-hidden">
            {/* Cybersecurity brackets decoration around flow chart */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-500/20 z-10 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-500/20 z-10 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-500/20 z-10 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-500/20 z-10 pointer-events-none" />

            <div className="absolute left-6 top-4 flex items-center gap-1.5 font-mono text-[9px] text-[#A855F7] bg-purple-950/20 px-2 py-0.5 border border-[#A855F7]/20 rounded z-10 pointer-events-none select-none">
              <span className="w-1 h-1 rounded-full bg-[#A855F7] animate-ping" />
              TOPOLOGY: {activeTab.toUpperCase()}
            </div>

            <FlowDiagram activeTab={activeTab} />
          </div>

        </div>

      </div>
    </section>
  );
}
