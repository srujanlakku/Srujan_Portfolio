"use client";

import { useEffect, useState } from "react";

const STRINGS = [
  "Building Multi-Agent AI Systems",
  "Engineering Production RAG Pipelines",
  "Architecting Autonomous AI Workflows",
  "Designing AI Backend Infrastructure"
];

export default function TypingText() {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (subIndex === STRINGS[index].length + 1 && !reverse) {
      const waitTimer = setTimeout(() => {
        setReverse(true);
      }, 1500);
      return () => clearTimeout(waitTimer);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % STRINGS.length);
      return;
    }

    const typeTimer = setTimeout(() => {
      setText(STRINGS[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 75);

    return () => clearTimeout(typeTimer);
  }, [subIndex, reverse, index, mounted]);

  if (!mounted) {
    return <span className="text-[#00D4FF] font-mono">&nbsp;</span>;
  }

  return (
    <span className="text-[#00D4FF] font-mono font-bold tracking-tight text-glow-cyan">
      {text}
      <span className="w-2.5 h-5 bg-[#00D4FF] inline-block ml-1 animate-pulse" />
    </span>
  );
}
