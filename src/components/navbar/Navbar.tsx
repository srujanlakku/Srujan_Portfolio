"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import ResumeButton from "../resume/ResumeButton";

const NAV_ITEMS = [
  { label: "SYSTEM", href: "#home" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ARCHITECTURE", href: "#architecture" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "TECHSTACK", href: "#techstack" },
  { label: "CONTACT", href: "#contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-[#020108]/80 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-[#000000]/40" 
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group font-mono text-sm tracking-wider select-none"
            >
              <div className="relative">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-90 transition-transform duration-500" />
                <span className="absolute -inset-1 rounded-full bg-cyan-400/20 blur-[4px] group-hover:blur-[8px] opacity-75 transition-all" />
              </div>
              <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                LAKKU<span className="text-cyan-400 font-extrabold">.OS</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-1.5 font-mono text-xs tracking-wider rounded-md transition-all select-none ${
                      isActive 
                        ? "text-cyan-400 font-bold" 
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-md -z-10 shadow-[0_0_8px_rgba(0,212,255,0.05)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <ResumeButton variant="navbar" />
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-slate-400 hover:text-cyan-400 focus:outline-none md:hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden bg-[#03020c]/95 border-b border-cyan-500/20 backdrop-blur-lg px-4 py-6 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 font-mono text-sm tracking-widest rounded-md border transition-all ${
                      isActive
                        ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 font-bold"
                        : "border-transparent text-slate-400 hover:bg-slate-900/50 hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>
            <div className="pt-2 border-t border-cyan-500/10 flex justify-center">
              <ResumeButton variant="navbar" className="w-full justify-center py-2.5 text-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
