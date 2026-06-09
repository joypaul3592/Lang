"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  { label: "General Inquiries", value: "hello@searandco.com", type: "email" },
  { label: "Press & Media", value: "press@searandco.com", type: "email" },
  { label: "Partnerships", value: "partners@searandco.com", type: "email" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
];

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} id="contact" className="sc-dark-section noise py-40 lg:py-60 relative overflow-hidden">
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 100% 0%, rgba(200,149,94,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Section mark */}
      <div className="absolute top-12 left-8 lg:left-16 flex items-center gap-2 opacity-30">
        <div className="w-2 h-2 border border-white/20 rotate-45" />
        <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
          07 — Contact
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — headline */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden mb-3">
              <motion.p
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/25 text-xs tracking-[0.3em] uppercase mb-8"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Get in Touch
              </motion.p>
            </div>

            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-semibold leading-[0.9] tracking-[-0.035em]"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 7rem)",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                Let's Build
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-semibold leading-[0.9] tracking-[-0.035em]"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 7rem)",
                  fontFamily: "var(--font-geist-sans)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(200,149,94,0.4)",
                }}
              >
                Together.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-white/35 leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              Whether you're a potential partner, investor, or someone who
              simply appreciates the craft — we'd love to hear from you.
            </motion.p>
          </div>

          {/* Right — contact details */}
          <div className="lg:col-span-5 lg:col-start-8">
            {/* Contact list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-16"
            >
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                  className="group py-6 border-b border-white/6 hover:border-white/12 transition-colors duration-300"
                >
                  <p
                    className="text-white/30 text-xs tracking-[0.18em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {link.label}
                  </p>
                  <a
                    href={`mailto:${link.value}`}
                    className="text-white/70 group-hover:text-white text-sm transition-colors duration-300"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {link.value}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <p
                className="text-white/20 text-xs tracking-[0.25em] uppercase mb-6"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Follow
              </p>
              <div className="flex items-center gap-8">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                    className="text-white/30 hover:text-white/70 text-xs tracking-[0.1em] uppercase transition-colors duration-300"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-32 lg:mt-48 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 relative">
              <div className="absolute inset-0 bg-[#C8955E] rotate-45 scale-75" />
            </div>
            <span
              className="text-white/30 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Sear & Co. Holdings — Est. 2018
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white/40 text-xs tracking-[0.12em] uppercase transition-colors duration-300" style={{ fontFamily: "var(--font-geist-mono)" }}>
              Privacy
            </a>
            <a href="#" className="text-white/20 hover:text-white/40 text-xs tracking-[0.12em] uppercase transition-colors duration-300" style={{ fontFamily: "var(--font-geist-mono)" }}>
              Terms
            </a>
            <span className="text-white/15 text-xs" style={{ fontFamily: "var(--font-geist-mono)" }}>
              © 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
