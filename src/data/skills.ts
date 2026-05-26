export interface Skill {
  name: string;
  level: "Advanced" | "Expert" | "Intermediate";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Orchestration & Agentic AI",
    description: "Architecting autonomous, multi-agent frameworks and advanced system state-machines.",
    skills: [
      { name: "LangGraph", level: "Expert" },
      { name: "LangChain", level: "Expert" },
      { name: "Multi-Agent AI", level: "Expert" },
      { name: "LLM Workflows", level: "Expert" }
    ]
  },
  {
    title: "AI Backend & API Engines",
    description: "Developing robust, asynchronous API layers and microservice infrastructures.",
    skills: [
      { name: "FastAPI", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "Asynchronous APIs", level: "Expert" },
      { name: "RESTful Web Services", level: "Advanced" }
    ]
  },
  {
    title: "Databases & Semantic Search",
    description: "Managing relation schemas, vector stores, and custom semantic retrieval pipelines.",
    skills: [
      { name: "ChromaDB", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "RAG Engineering", level: "Expert" },
      { name: "Semantic Retrieval", level: "Expert" }
    ]
  },
  {
    title: "Frontend UI & Motion Engineering",
    description: "Crafting fully interactive, production-grade dashboards and smooth visual designs.",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" }
    ]
  },
  {
    title: "DevOps & Infrastructure",
    description: "Deploying high-reliability runtime systems, isolation containers, and CI pipelines.",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Git & Version Control", level: "Expert" },
      { name: "Vector Index Tuning", level: "Advanced" },
      { name: "SaaS Systems Scale", level: "Advanced" }
    ]
  }
];
