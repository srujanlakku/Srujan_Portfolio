"use client";

import { motion } from "framer-motion";
import { 
  Network, 
  Bot, 
  Workflow, 
  Server, 
  Database, 
  Search, 
  Layers, 
  Cpu 
} from "lucide-react";

interface ExpertiseItem {
  title: string;
  description: string;
  icon: any;
  glowColor: string;
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: "Agentic AI Systems",
    description: "Designing stateful autonomous architectures that perform complex task routing and system evaluations without human loop dependency.",
    icon: Bot,
    glowColor: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Configuring multi-agent conversational patterns, parallel router tracks, state consolidation, and complex hierarchical agent supervisors.",
    icon: Network,
    glowColor: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
  },
  {
    title: "RAG Engineering",
    description: "Optimizing retrieval systems: implementing advanced text splitting, contextual chunking, dense retrieval, and metadata filtering.",
    icon: Layers,
    glowColor: "group-hover:border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.15)]"
  },
  {
    title: "AI Backend Infrastructure",
    description: "Engineering isolated Python environments, Docker deployments, distributed message broker queues, and production-grade LLM runtimes.",
    icon: Cpu,
    glowColor: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
  },
  {
    title: "FastAPI Systems",
    description: "Architecting high-throughput, fully asynchronous API endpoints, persistent WebSocket dialogue routes, and background task runners.",
    icon: Server,
    glowColor: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
  },
  {
    title: "Semantic Retrieval",
    description: "Building customized text embeddings, dense cross-encoder reranking algorithms, and similarity matching scoring rubrics.",
    icon: Search,
    glowColor: "group-hover:border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.15)]"
  },
  {
    title: "Vector Databases",
    description: "Setting up, tuning, and querying high-performance databases such as ChromaDB, PGVector, and Pinecone, ensuring under-50ms index searches.",
    icon: Database,
    glowColor: "group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
  },
  {
    title: "LLM Workflow Engineering",
    description: "Constructing robust operational matrices: parsing complex system prompts, setting validation schemas, and establishing failure catch fallbacks.",
    icon: Workflow,
    glowColor: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-20 overflow-hidden border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Cpu className="w-4 h-4 text-[#A855F7]" />
            COGNITIVE_EXPERTISE_LAYERS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
            Core AI Engineering Expertise
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto" />
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Deep professional specializations in architecting agent routers, high-concurrency async streaming, and indexing search strategies.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative flex flex-col p-6 rounded-lg glass-panel border border-slate-900 transition-all duration-300 select-none hover:-translate-y-1"
            >
              {/* Animated hover border glow */}
              <div className={`absolute -inset-px rounded-lg border border-transparent transition-all duration-300 -z-10 ${item.glowColor}`} />
              
              {/* Card Icon */}
              <div className="p-3 bg-slate-950 border border-slate-900 text-cyan-400 rounded-md w-fit mb-4 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-base md:text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Cyber decoration brackets */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-slate-800 group-hover:border-cyan-500/40 transition-colors" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-slate-800 group-hover:border-cyan-500/40 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
