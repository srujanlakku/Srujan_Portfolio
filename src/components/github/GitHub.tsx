"use client";

import { Github, Star, GitFork, Terminal, Activity, Code } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  langColor: string;
  url: string;
}

const FEATURED_REPOS: Repository[] = [
  {
    name: "ai-interview-agent",
    description: "Multi-agent technical evaluator built with LangGraph state machine routers, fastapi streaming responses, and pgvector embeddings.",
    stars: 18,
    forks: 4,
    language: "Python",
    langColor: "bg-[#3572A5]",
    url: "https://github.com/srujanlakku/ai-interview-agent"
  },
  {
    name: "tattva-ai-tutor",
    description: "Conversational educational system leveraging LangChain Socratic prompt architectures and PostgreSQL windowed chat histories.",
    stars: 12,
    forks: 2,
    language: "TypeScript",
    langColor: "bg-[#3178c6]",
    url: "https://github.com/srujanlakku/tattva-ai-tutor"
  },
  {
    name: "personal-knowledge-brain",
    description: "Local RAG semantic querying platform running lightweight embeddings index and similarity cross-encoder rerank layers.",
    stars: 15,
    forks: 3,
    language: "Python",
    langColor: "bg-[#3572A5]",
    url: "https://github.com/srujanlakku/personal-knowledge-brain"
  }
];

const LANGUAGE_METRICS = [
  { name: "Python (LangGraph/AI)", count: 55, color: "bg-[#3572A5]" },
  { name: "TypeScript (React/Next)", count: 30, color: "bg-[#3178c6]" },
  { name: "SQL (Postgres Schema)", count: 15, color: "bg-[#e38c00]" }
];

export default function GitHub() {
  // Generate mock contribution grid data (53 weeks * 7 days)
  const activityIntensity = [0, 1, 2, 3, 2, 1, 0, 4, 3, 2, 1, 0, 2, 3, 1, 4];
  const gridDays = Array.from({ length: 140 }).map((_, idx) => {
    const intensity = activityIntensity[idx % activityIntensity.length];
    const fillColors = [
      "bg-slate-900/60 border-slate-950",
      "bg-emerald-900/40 border-emerald-950 shadow-[0_0_4px_rgba(16,185,129,0.1)]",
      "bg-emerald-700/50 border-emerald-800 shadow-[0_0_6px_rgba(16,185,129,0.2)]",
      "bg-emerald-500/70 border-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
      "bg-cyan-400/80 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
    ];
    return {
      id: idx,
      fill: fillColors[intensity],
      tooltip: `${intensity * 3} neural consolidations parsed`
    };
  });

  return (
    <section id="github" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Github className="w-4 h-4 text-cyan-400" />
            GITHUB_METADATA_TELEMETRY
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            Telemetry & Code Analytics
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-[#A855F7] mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Live code contribution analytics, system language shares, and active repository frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT TELEMETRY CONSOLE: Heatmap & Stats - 8 Columns */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-left">
            
            {/* Custom contribution heatmap grid */}
            <div className="glass-panel p-6 rounded-lg border border-slate-800/80 space-y-4 flex flex-col h-full font-mono">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-xs">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-slate-300 font-bold">NEURAL_CONTRIBUTION_MATRIX</span>
                </div>
                <a 
                  href="https://github.com/srujanlakku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-cyan-400 hover:underline flex items-center gap-1"
                >
                  srujanlakku.sys_log <Terminal className="w-3 h-3" />
                </a>
              </div>

              {/* Grid element */}
              <div className="w-full overflow-x-auto py-2">
                <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[500px]">
                  {gridDays.map((day) => (
                    <div
                      key={day.id}
                      className={`w-3.5 h-3.5 rounded-sm border transition-all hover:scale-125 cursor-help ${day.fill}`}
                      title={day.tooltip}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-900">
                <span>SYSTEM_LOG: ACTIVE_ORCHESTRATION</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 bg-slate-900 border border-slate-950 rounded-sm" />
                  <span className="w-2.5 h-2.5 bg-emerald-900/40 border border-emerald-950 rounded-sm" />
                  <span className="w-2.5 h-2.5 bg-emerald-700/50 border border-emerald-800 rounded-sm" />
                  <span className="w-2.5 h-2.5 bg-emerald-500/70 border border-emerald-600 rounded-sm" />
                  <span className="w-2.5 h-2.5 bg-cyan-400/80 border border-cyan-500 rounded-sm" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Repositories showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FEATURED_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col p-4 rounded-lg bg-slate-950/40 border border-slate-900/80 hover:border-cyan-500/20 transition-all select-none hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-white group-hover:text-cyan-400 transition-colors uppercase">
                      {repo.name}
                    </span>
                    <Github className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="font-sans text-[11px] text-slate-400 leading-relaxed mb-4 flex-grow">
                    {repo.description}
                  </p>
                  <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 mt-auto pt-2 border-t border-slate-950">
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-yellow-500/80" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork className="w-3 h-3 text-[#A855F7]/80" /> {repo.forks}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT TELEMETRY CONSOLE: Language Share - 4 Columns */}
          <div className="lg:col-span-4 flex">
            <div className="glass-panel p-6 rounded-lg border border-slate-800/80 space-y-6 flex flex-col justify-between w-full font-mono text-left">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-xs">
                  <Code className="w-4 h-4 text-[#A855F7]" />
                  <span className="text-slate-300 font-bold">SYSTEM_LANG_SHARE</span>
                </div>
                <span className="text-[9px] text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                  COMPILED
                </span>
              </div>

              {/* Language detail blocks */}
              <div className="space-y-4 flex-grow flex flex-col justify-center">
                {LANGUAGE_METRICS.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                      <span>{lang.name}</span>
                      <span className="font-bold text-cyan-400">
                        {lang.count} units
                      </span>
                    </div>

                    {/* No percentage bars: render elite "signal dots" instead */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const filled = i < Math.round(lang.count / 10);
                        return (
                          <span
                            key={i}
                            className={`w-2.5 h-2.5 rounded-full border transition-transform ${
                              filled
                                ? `${lang.color} border-cyan-500/30 shadow-[0_0_10px_rgba(0,212,255,0.12)]`
                                : "bg-slate-950/30 border-slate-800"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical system spec block */}
              <div className="bg-slate-950/60 p-3 border border-slate-900 rounded text-[10px] text-slate-400 leading-relaxed font-mono">
                <div className="text-slate-500 font-bold mb-1">// TELEMETRY_HARDWARE</div>
                <div>Runtime Thread: Asynchronous Multithreading</div>
                <div>Server Core: FastAPI Uvicorn Instance</div>
                <div>Deployment Gateway: Vercel Cloud Node</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
