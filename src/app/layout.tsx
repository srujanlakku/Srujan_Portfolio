import type { Metadata } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srujanlakku.vercel.app"),
  title: {
    default: "Srujan Lakku — GenAI & Agentic AI Developer",
    template: "%s | Elite GenAI Systems Engineer",
  },
  description:
    "Futuristic portfolio of a GenAI & Agentic AI Developer. Elite GenAI systems engineering: LangGraph orchestration, FastAPI infrastructure, RAG pipelines, and production-grade AI systems.",
  keywords: [
    "GenAI",
    "Agentic AI",
    "LangGraph",
    "FastAPI",
    "RAG",
    "vector databases",
    "React Flow",
    "AI systems engineering",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Srujan Lakku — GenAI & Agentic AI Developer",
    description:
      "Elite GenAI systems engineering portfolio: LangGraph orchestration, FastAPI infrastructure, RAG pipelines, and agentic workflows.",
    type: "website",
    locale: "en_IN",
    url: "https://srujanlakku.vercel.app/",
    siteName: "Srujan Lakku Portfolio",
    images: [
      {
        url: "https://srujanlakku.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Futuristic AI engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srujan Lakku — GenAI & Agentic AI Developer",
    description:
      "Elite GenAI systems engineering portfolio: LangGraph orchestration, FastAPI infrastructure, RAG pipelines, and agentic workflows.",
    images: ["https://srujanlakku.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

