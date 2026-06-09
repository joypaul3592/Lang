"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const principles = [
  {
    num: "I",
    title: "Design is not decoration.",
    body: "Every spatial decision, typographic choice, and material selection is a strategic act. Design is the brand made tangible.",
  },
  {
    num: "II",
    title: "Craft demands obsession.",
    body: "Mediocrity is a choice. Excellence requires systems, standards, and the relentless pursuit of the next centimeter of improvement.",
  },
  {
    num: "III",
    title: "Culture is the moat.",
    body: "Products can be copied. Prices can be matched. The culture you build inside — the way your teams care — cannot be replicated.",
  },
  {
    num: "IV",
    title: "Scale without soul is noise.",
    body: "Growth is not the goal. Building brands with lasting cultural relevance is. Scale must serve the brand, not the other way around.",
  },
];

function PrincipleRow({
  principle,
  index,
}: {
  principle: (typeof principles)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-start py-10 lg:py-12 border-b border-white/6 hover:border-white/12 transition-colors duration-500"
    >
      {/* Roman numeral */}
      <div className="lg:col-span-1">
        <span
          className="text-[#C8955E]/40 text-xs tracking-[0.2em] group-hover:text-[#C8955E]/70 transition-colors duration-300"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {principle.num}
        </span>
      </div>

      {/* Title */}
      <div className="lg:col-span-5">
        <h3
          className="text-white font-medium leading-tight tracking-[-0.02em] group-hover:text-white/90 transition-colors duration-300"
          style={{
            fontSize: "clamp(1.1rem, 2.2vw, 1.8rem)",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          {principle.title}
        </h3>
      </div>

      {/* Body */}
      <div className="lg:col-span-5 lg:col-start-8">
        <p
          className="text-white/35 leading-relaxed"
          style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.95rem" }}
        >
          {principle.body}
        </p>
      </div>
    </motion.div>
  );
}

export function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="philosophy" className="relative py-40 lg:py-60 sc-dark-section noise overflow-hidden">
      {/* Section mark */}
      <div className="absolute top-12 left-8 lg:left-16 flex items-center gap-2 opacity-30">
        <div className="w-2 h-2 border border-white/20 rotate-45" />
        <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "var(--font-geist-mono)" }}>
          05 — Philosophy
        </span>
      </div>

      {/* Ambient ember glow */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute"
          style={{
            left: "-20%",
            top: "20%",
            width: "60%",
            height: "60%",
            background: "radial-gradient(ellipse, rgba(200,149,94,0.04) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-24 lg:mb-32 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/25 text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                Our Principles
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-semibold leading-[0.9] tracking-[-0.035em]"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 7rem)",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                The Way
                <br />
                <span className="text-[#C8955E]">We Think.</span>
              </motion.h2>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-white/35 leading-relaxed"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              These are not values posted on a wall. They are operating
              principles that shape every decision — from brand naming to
              kitchen layouts.
            </motion.p>
          </div>
        </div>

        {/* Principles list */}
        <div>
          {principles.map((p, i) => (
            <PrincipleRow key={p.num} principle={p} index={i} />
          ))}
        </div>

        {/* Bottom declaration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-24 lg:mt-32 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <p
            className="text-white/15 text-xs tracking-[0.3em] uppercase max-w-xs"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            These principles have guided Sear & Co. since 2018.
          </p>
          <div className="h-px flex-1 mx-0 lg:mx-16 bg-gradient-to-r from-transparent via-white/8 to-transparent hidden lg:block" />
          <p
            className="text-white/15 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Sear & Co. — Holding Group
          </p>
        </motion.div>
      </div>
    </section>
  );
}
