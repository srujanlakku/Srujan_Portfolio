"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/loaders/Preloader";
import SmoothScroll from "../components/animations/SmoothScroll";
import NeuralBackground from "../components/particles/NeuralBackground";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Expertise from "../components/expertise/Expertise";
import Projects from "../components/projects/Projects";
import Architecture from "../components/architecture/Architecture";
import Timeline from "../components/timeline/Timeline";
import TechStack from "../components/techstack/TechStack";
import GitHub from "../components/github/GitHub";
import Certifications from "../components/certifications/Certifications";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Auto scroll to top upon page refresh/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. AI System preloading screen */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <SmoothScroll>
          <div className="relative min-h-screen w-full selection:bg-purple-500/30 selection:text-cyan-400">
            {/* 2. Interactive layer 1-5 Background System */}
            <NeuralBackground />

            {/* 3. Sticky Glassmorphism Header */}
            <Navbar />

            {/* 4. Portfolio Main Content Sections */}
            <main className="w-full">
              <Hero />
              <About />
              <Expertise />
              <Projects />
              <Architecture />
              <Timeline />
              <TechStack />
              <GitHub />
              <Certifications />
              <Contact />
            </main>

            {/* 5. Clean Metadata footer */}
            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}
