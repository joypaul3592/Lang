"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui";
import Link from "next/link";

import logo from "@/public/logo.png";
import Image from "next/image";

const navItems = [
  { label: "Brands", href: "#showcase" },
  { label: "Story", href: "#about" },
  { label: "Philosophy", href: "#mission" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);

    // Wait for the mobile menu collapse to settle, then scroll manually so the
    // layout change doesn't cancel the smooth scroll on touch devices.
    requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      const navOffset = 64; // fixed navbar height (h-16)
      const top =
        target.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", href);
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = `${e.clientX}px`;
        cursorDot.current.style.top = `${e.clientY}px`;
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = `${e.clientX}px`;
        cursorRing.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-border/50 ${
          scrolled ? "bg-background/50 backdrop-blur-xl border-b" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <Image src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className=" hover:opacity-80 text-xs tracking-[0.12em] uppercase transition-colors duration-300"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Link
              href="#showcase"
              className="group flex items-center gap-2 text-xs h-8 text-foreground border border-border rounded px-3.5 py-2 hover:border-primary/80 hover:bg-primary hover:text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Explore Brands
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              >
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden overflow-hidden bg-background/30 backdrop-blur-xs border-t border-border/50"
        >
          <div className="px-8 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/50 hover:text-white text-sm tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
