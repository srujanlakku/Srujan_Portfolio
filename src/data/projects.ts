export interface ProjectWorkflowStep {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  workflow: ProjectWorkflowStep[];
  githubUrl: string;
  liveUrl?: string;
  category: "Agentic AI" | "RAG & Search" | "EdTech AI";
}

export const projectsData: Project[] = [
  {
    id: "interview-agent",
    title: "AI Interview Agent",
    subtitle: "Autonomous Candidate Evaluation Engine",
    description: "An autonomous agentic system built with LangGraph that conducts technical screening interviews, dynamically adapts questions based on user answers, and generates semantic evaluation reports.",
    detailedDescription: "Designed and engineered a production-grade multi-agent interview evaluator. The system orchestrates multiple specialised LLM agents: a friendly Interviewer Agent, a silent Evaluator Agent, a Time-keeper Agent, and a Report Generator. It conducts live audio/text-based conversational interviews, dynamically queries a vector store for relevant sub-questions, checks user answers for semantic completeness, and scores them on predefined rubric axes.",
    techStack: ["LangGraph", "LangChain", "FastAPI", "PostgreSQL", "ChromaDB", "React", "Tailwind CSS"],
    workflow: [
      { name: "Ingress", description: "Candidate resume & job description uploaded and parsed into vector DB." },
      { name: "Router", description: "LangGraph state machine selects the best starting technical track." },
      { name: "Interviewer", description: "LLM agent dynamically constructs context-aware technical questions." },
      { name: "Evaluator", description: "Background agent grades responses semantically against reference solutions." },
      { name: "Compiler", description: "Generates comprehensive JSON/PDF report containing deep diagnostic metrics." }
    ],
    githubUrl: "https://github.com/srujanlakku/Ai_interview_agent",
    liveUrl: "https://ai-interview-agent.srujanlakku.dev",
    category: "Agentic AI"
  },
  {
    id: "tattva-tutor",
    title: "Tattva – AI Tutor",
    subtitle: "Socratic AI Learning Companion",
    description: "A specialized conversational educational bot using a Socratic learning methodology, guiding students towards conceptual understanding through structured questioning rather than direct answers.",
    detailedDescription: "Tattva is an intelligent tutoring interface built to foster deep learning. Instead of lecturing, it acts as a mentor using Socratic prompts. The backend uses FastAPI to deliver high-throughput async streaming. It leverages LangChain for orchestration, PostgreSQL to persist complex dialogue memory, and stores student knowledge mappings to track mastery progress, triggering micro-hints when the student is stuck.",
    techStack: ["FastAPI", "LangChain", "OpenAI GPT-4", "PostgreSQL", "React", "Framer Motion"],
    workflow: [
      { name: "Prompting", description: "Socratic pedagogical principles guide the core agentic prompt matrix." },
      { name: "Dialogue Memory", description: "Maintains structured windowed chat history with conceptual checkpoints." },
      { name: "Hint Engine", description: "Compares current student state to the target concept vector map." },
      { name: "Synthesizer", description: "Outputs conversational prompts that nudge the student to deduce answers." }
    ],
    githubUrl: "https://github.com/srujanlakku/Tattva_The_AI_Tutor",
    liveUrl: "https://tattva.srujanlakku.dev",
    category: "EdTech AI"
  },
  {
    id: "knowledge-brain",
    title: "Personal Knowledge Brain",
    subtitle: "Local RAG Semantic Search Engine",
    description: "A private, fast, locally-deployable semantic search and synthesis platform utilizing state-of-the-art vector embedding pipelines and lightweight local models for instant document querying.",
    detailedDescription: "Engineered a private knowledge retrieval platform that parses markdown, PDF, and text documents locally. Built an ingestion pipeline with high-fidelity chunking, generated OpenAI-compatible local embeddings, and stored vectors in ChromaDB. Implemented custom reranking models to boost retrieval precision, delivering synthesised context summaries to local LLM inference engines.",
    techStack: ["Python", "FastAPI", "ChromaDB", "RAG Pipeline", "Docker", "Tailwind CSS", "Semantic Retrieval"],
    workflow: [
      { name: "Parser", description: "High-accuracy doc-chunker that extracts clean text from PDFs and Markdown." },
      { name: "Embedding", description: "Calculates semantic vector vectors using customized embeddings." },
      { name: "Vector Index", description: "Stores and indexes embeddings in high-performance ChromaDB." },
      { name: "Retrieval", description: "Executes cosine-similarity query followed by dense cross-encoder reranking." }
    ],
    githubUrl: "https://github.com/srujanlakku/My_Personal_knowledge_brain_",
    category: "RAG & Search"
  }
];
