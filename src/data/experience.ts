export interface TimelineEvent {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export const experienceData: TimelineEvent[] = [
  {
    company: "Zennial Pro Pvt Ltd",
    role: "GenAI & Agentic AI Developer",
    period: "2024 - Present",
    description: "Architecting and building production-ready Agentic AI systems, automated RAG pipelines, and high-performance microservices for enterprise automation clients.",
    achievements: [
      "Engineered multi-agent orchestration states using LangGraph and FastAPI, reducing manual workflows by 60%.",
      "Designed high-performance semantic retrieval engines using ChromaDB and PGVector, achieving sub-200ms latency on massive document corpuses.",
      "Developed secure, fully asynchronous REST APIs handles concurrent chat instances and long-running LLM threads under high-load profiles.",
      "Orchestrated backend infrastructure using Docker containers and automated GitHub Actions, enabling zero-downtime microservices updates."
    ],
    techStack: ["LangGraph", "LangChain", "FastAPI", "Python", "ChromaDB", "PostgreSQL", "Docker", "Git"]
  },
  {
    company: "Intellipaat",
    role: "AI & Backend Engineering Intern",
    period: "2023 - 2024",
    description: "Contributed to building data science models, Python-based automation pipelines, and core SQL database structures.",
    achievements: [
      "Developed custom Python utility scripts to automate batch data extraction and parsing from various formats (CSV, PDF, HTML).",
      "Wrote complex PostgreSQL queries and structured database index tables to accelerate query processing by 30%.",
      "Assisted in prototyping semantic search proofs-of-concept using early LangChain embeddings and open-source models.",
      "Collaborated with frontend developers to resolve API integration issues, improving overall portal load performance."
    ],
    techStack: ["Python", "SQL", "PostgreSQL", "Pandas", "NumPy", "Git"]
  }
];
