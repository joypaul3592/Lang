"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function NewsletterSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      ref={ref}
      id="newsletter"
      className="sc-section-bg py-40 lg:py-56 relative overflow-hidden"
    >
      {/* Subtle ember accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,149,94,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section mark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-14"
          >
            <div className="w-8 h-px bg-[#C8955E]/40" />
            <span
              className=" text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              06 — Dispatch
            </span>
            <div className="w-8 h-px bg-[#C8955E]/40" />
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text- font-semibold leading-[0.92] tracking-[-0.035em]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              Stay in the
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold leading-[0.92] tracking-[-0.035em]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
                fontFamily: "var(--font-geist-sans)",

                WebkitTextStroke: "1.5px rgba(10,10,10,0.3)",
              }}
            >
              Conversation.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-/45 leading-relaxed mb-14 text-lg"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Curated perspectives on brand-building, hospitality design, and the
            culture of modern dining. Dispatched rarely. Never noise.
          </motion.p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 border border-/12 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@address.com"
                required
                className="flex-1 bg-transparent px-5 py-4 text-sm text- placeholder:text-/30 focus:outline-none"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              />
              <button
                type="submit"
                className="bg- text-white text-xs tracking-[0.12em] uppercase px-6 py-4 hover:bg-[#C8955E] transition-colors duration-300 whitespace-nowrap"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Subscribe
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3 py-4"
            >
              <div className="w-2 h-2 rounded-full bg-[#C8955E]" />
              <p
                className="text-/60 text-sm tracking-[0.1em]"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                You're on the list. Welcome.
              </p>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-6 text-/25 text-xs tracking-[0.1em]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            No spam. Unsubscribe at any time.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
