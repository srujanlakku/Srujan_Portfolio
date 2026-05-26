"use client";

import { useEffect, useState } from "react";
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap, 
  MarkerType,
  Node as FlowNode,
  Edge as FlowEdge
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface FlowDiagramProps {
  activeTab: "multi-agent" | "rag" | "fastapi";
}

// 1. MULTI-AGENT STATE WORKFLOW DATA
const agentNodes: FlowNode[] = [
  {
    id: "ingress",
    type: "default",
    data: { label: "🌐 HTTP INGRESS GATEWAY" },
    position: { x: 50, y: 150 },
    style: { background: "#050412", border: "1px solid #00D4FF", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" }
  },
  {
    id: "router",
    type: "default",
    data: { label: "🔄 LANGGRAPH STATE ROUTER" },
    position: { x: 280, y: 150 },
    style: { background: "#050412", border: "1px solid #A855F7", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)" }
  },
  {
    id: "interviewer",
    type: "default",
    data: { label: "🤖 INTERVIEWER AGENT (LLM)" },
    position: { x: 520, y: 50 },
    style: { background: "#050412", border: "1px solid #EC4899", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(236, 72, 153, 0.2)" }
  },
  {
    id: "evaluator",
    type: "default",
    data: { label: "🧐 BACKGROUND EVALUATOR" },
    position: { x: 520, y: 250 },
    style: { background: "#050412", border: "1px solid #EC4899", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(236, 72, 153, 0.2)" }
  },
  {
    id: "chromadb",
    type: "default",
    data: { label: "📂 CHROMADB VECTOR STORAGE" },
    position: { x: 780, y: 50 },
    style: { background: "#050412", border: "1px solid #00D4FF", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" }
  },
  {
    id: "consolidator",
    type: "default",
    data: { label: "📊 STATE CONSOLIDATOR & REPORT" },
    position: { x: 780, y: 250 },
    style: { background: "#050412", border: "1px solid #A855F7", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)" }
  }
];

const agentEdges: FlowEdge[] = [
  { id: "e-ingress-router", source: "ingress", target: "router", animated: true, style: { stroke: "#00D4FF" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-router-interviewer", source: "router", target: "interviewer", animated: true, style: { stroke: "#A855F7" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-router-evaluator", source: "router", target: "evaluator", animated: true, style: { stroke: "#A855F7" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-interviewer-db", source: "interviewer", target: "chromadb", animated: true, style: { stroke: "#EC4899" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-evaluator-consolidator", source: "evaluator", target: "consolidator", animated: true, style: { stroke: "#EC4899" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-db-consolidator", source: "chromadb", target: "consolidator", animated: true, style: { stroke: "#00D4FF" }, markerEnd: { type: MarkerType.Arrow } }
];

// 2. RAG PIPELINE DATA
const ragNodes: FlowNode[] = [
  {
    id: "docs",
    type: "default",
    data: { label: "📄 DOCUMENT INGRESS (PDF/MD)" },
    position: { x: 50, y: 150 },
    style: { background: "#050412", border: "1px solid #00D4FF", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" }
  },
  {
    id: "chunker",
    type: "default",
    data: { label: "✂️ CONTEXT-AWARE TEXT CHUNKER" },
    position: { x: 280, y: 150 },
    style: { background: "#050412", border: "1px solid #A855F7", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)" }
  },
  {
    id: "embed",
    type: "default",
    data: { label: "🧠 EMBEDDINGS PIPELINE (LOCAL/OAI)" },
    position: { x: 520, y: 150 },
    style: { background: "#050412", border: "1px solid #EC4899", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(236, 72, 153, 0.2)" }
  },
  {
    id: "chroma",
    type: "default",
    data: { label: "🗄️ CHROMADB STORAGE & QUERY" },
    position: { x: 760, y: 50 },
    style: { background: "#050412", border: "1px solid #00D4FF", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" }
  },
  {
    id: "rerank",
    type: "default",
    data: { label: "🎯 CROSS-ENCODER RE-RANKER" },
    position: { x: 760, y: 250 },
    style: { background: "#050412", border: "1px solid #A855F7", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)" }
  }
];

const ragEdges: FlowEdge[] = [
  { id: "e-docs-chunker", source: "docs", target: "chunker", animated: true, style: { stroke: "#00D4FF" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-chunker-embed", source: "chunker", target: "embed", animated: true, style: { stroke: "#A855F7" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-embed-chroma", source: "embed", target: "chroma", animated: true, style: { stroke: "#EC4899" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-chroma-rerank", source: "chroma", target: "rerank", animated: true, style: { stroke: "#00D4FF" }, markerEnd: { type: MarkerType.Arrow } }
];

// 3. FASTAPI GATEWAY DATA
const fastapiNodes: FlowNode[] = [
  {
    id: "client",
    type: "default",
    data: { label: "💻 FRONTEND CLOUD INTERFACE" },
    position: { x: 50, y: 150 },
    style: { background: "#050412", border: "1px solid #00D4FF", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" }
  },
  {
    id: "async",
    type: "default",
    data: { label: "⚡ FASTAPI ASYNC ENGINE" },
    position: { x: 280, y: 150 },
    style: { background: "#050412", border: "1px solid #A855F7", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)" }
  },
  {
    id: "socket",
    type: "default",
    data: { label: "🔌 BI-DIRECTIONAL WEBSOCKETS" },
    position: { x: 520, y: 50 },
    style: { background: "#050412", border: "1px solid #EC4899", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(236, 72, 153, 0.2)" }
  },
  {
    id: "rest",
    type: "default",
    data: { label: "📡 REST SECURE API ENDPOINTS" },
    position: { x: 520, y: 250 },
    style: { background: "#050412", border: "1px solid #00D4FF", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(0, 212, 255, 0.2)" }
  },
  {
    id: "celery",
    type: "default",
    data: { label: "⚙️ BACKGROUND WORKER SCHEDULER" },
    position: { x: 760, y: 150 },
    style: { background: "#050412", border: "1px solid #A855F7", color: "#ffffff", fontFamily: "monospace", fontSize: "11px", boxShadow: "0 0 10px rgba(168, 85, 247, 0.2)" }
  }
];

const fastapiEdges: FlowEdge[] = [
  { id: "e-client-async", source: "client", target: "async", animated: true, style: { stroke: "#00D4FF" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-async-socket", source: "async", target: "socket", animated: true, style: { stroke: "#A855F7" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-async-rest", source: "async", target: "rest", animated: true, style: { stroke: "#00D4FF" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-socket-celery", source: "socket", target: "celery", animated: true, style: { stroke: "#EC4899" }, markerEnd: { type: MarkerType.Arrow } },
  { id: "e-rest-celery", source: "rest", target: "celery", animated: true, style: { stroke: "#00D4FF" }, markerEnd: { type: MarkerType.Arrow } }
];

export default function FlowDiagram({ activeTab }: FlowDiagramProps) {
  const [nodes, setNodes] = useState<FlowNode[]>(agentNodes);
  const [edges, setEdges] = useState<FlowEdge[]>(agentEdges);

  // Trigger re-rendering layout of diagram nodes when activeTab changes
  useEffect(() => {
    if (activeTab === "multi-agent") {
      setNodes(agentNodes);
      setEdges(agentEdges);
    } else if (activeTab === "rag") {
      setNodes(ragNodes);
      setEdges(ragEdges);
    } else if (activeTab === "fastapi") {
      setNodes(fastapiNodes);
      setEdges(fastapiEdges);
    }
  }, [activeTab]);

  return (
    <div className="w-full h-full bg-[#020108] border border-slate-900 rounded-lg overflow-hidden relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesConnectable={false}
        nodesDraggable={true}
        className="w-full h-full"
      >
        <Background color="#1e293b" gap={16} size={1} />
        <Controls showInteractive={false} className="bg-slate-900 border border-slate-800 text-white rounded [&_button]:bg-slate-900 [&_button]:border-slate-800 [&_button:hover]:bg-slate-800" />
        <MiniMap 
          style={{ background: "#050412" }}
          nodeColor={(n) => {
            const border = String(n.style?.border ?? "");
            if (border.includes("#00D4FF")) return "#00D4FF";
            if (border.includes("#A855F7")) return "#A855F7";
            return "#EC4899";
          }}
          maskColor="rgba(0,0,0,0.6)"
        />
      </ReactFlow>
    </div>
  );
}
