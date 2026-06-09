"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function RevealText({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section 1: We Build Brands ────────────────────────────── */
function WeBuiltBrands() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineW = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="story"
      className="sc-section-bg py-40 lg:py-56 relative overflow-hidden"
    >
      {/* Swiss grid marks */}
      <div className="absolute top-12 left-8 lg:left-16 flex items-center gap-2 opacity-30">
        <div className="w-2 h-2 border border-border rotate-45" />
        <span
          className=" text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          01 — Story
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="max-w-4xl">
          <RevealText delay={0.05}>
            <p
              className=" text-sm tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              The Holding Company
            </p>
          </RevealText>

          <h2
            className="font-semibold text-foreground leading-[0.9] tracking-[-0.035em] mb-16"
            style={{
              fontSize: "clamp(3rem, 9vw, 10rem)",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            <RevealText delay={0.1}>We Build</RevealText>
            <RevealText delay={0.2}>
              <span className="text-[#C8955E]">Brands.</span>
            </RevealText>
          </h2>

          {/* Animated rule */}
          <motion.div className="h-px bg-foreground mb-16 relative overflow-hidden">
            <motion.div
              style={{ width: lineW }}
              className="absolute left-0 top-0 h-full bg-[#C8955E]"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn delay={0.2}>
              <p
                className="text-foreground leading-relaxed text-lg"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                Sear & Co. is not a restaurant company. It is a brand
                architecture firm that happens to operate at the intersection of
                hospitality, design, and culture.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p
                className="text-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                We identify whitespace in the dining landscape, then engineer
                brands built to endure — from the identity system to the service
                ritual, from the spatial grammar to the digital presence.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 2: Brand Trio ──────────────────────────────────── */
const brands = [
  {
    id: "01",
    name: "Flame",
    tagline: "Fire, Craft, Ritual.",
    desc: "A primal dining experience centered on live-fire cooking, ancient techniques, and bold modern interiors.",
    color: "#E85D26",
    light: "rgba(232, 93, 38, 0.06)",
    accent: "rgba(232, 93, 38, 0.3)",
  },
  {
    id: "02",
    name: "Redchili",
    tagline: "Heat. Heritage. Home.",
    desc: "Modern Asian-fusion with deep roots in spice culture. Elevated comfort food reimagined for the contemporary palate.",
    color: "#C8182E",
    light: "rgba(200, 24, 46, 0.06)",
    accent: "rgba(200, 24, 46, 0.3)",
  },
  {
    id: "03",
    name: "Sear & Sizzle",
    tagline: "Prime. Precise. Perfect.",
    desc: "A temple of premium proteins. Sourced globally, prepared locally. Where craftsmanship meets culinary obsession.",
    color: "#C8955E",
    light: "rgba(200, 149, 94, 0.06)",
    accent: "rgba(200, 149, 94, 0.3)",
  },
];

function BrandCard({
  brand,
  index,
}: {
  brand: (typeof brands)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-white/8 p-10 lg:p-12 hover:border-white/16 transition-all duration-500 cursor-pointer overflow-hidden"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: brand.light }}
      />

      {/* Number */}
      <div
        className="text-white/10 text-xs tracking-[0.2em] mb-8"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {brand.id}
      </div>

      {/* Accent line */}
      <motion.div
        className="h-px mb-8 origin-left"
        style={{ background: brand.color }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
      />

      {/* Name */}
      <h3
        className="text-white font-semibold tracking-[-0.02em] mb-3 leading-none"
        style={{
          fontSize: "clamp(1.8rem, 3vw, 3rem)",
          fontFamily: "var(--font-geist-sans)",
          color: brand.color,
        }}
      >
        {brand.name}
      </h3>

      <p
        className="text-white/40 text-sm tracking-[0.12em] uppercase mb-6"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {brand.tagline}
      </p>

      <p
        className="text-white/35 leading-relaxed text-sm max-w-sm"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        {brand.desc}
      </p>

      {/* CTA arrow */}
      <div className="mt-10 flex items-center gap-3 text-white/30 group-hover:text-white/60 transition-colors duration-300">
        <span
          className="text-xs tracking-[0.15em] uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Learn more
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="group-hover:translate-x-1.5 transition-transform duration-300"
        >
          <path
            d="M2 8H14M14 8L9 3M14 8L9 13"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Corner mark */}
      <div
        className="absolute top-6 right-6 w-2 h-2 rotate-45 border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: brand.accent }}
      />
    </motion.div>
  );
}

function BrandTrio() {
  return (
    <section
      id="brands"
      className="sc-dark-section py-32 lg:py-48 relative noise"
    >
      {/* Grid marks */}
      <div className="absolute top-12 left-8 lg:left-16 flex items-center gap-2 opacity-30">
        <div className="w-2 h-2 border border-white/20 rotate-45" />
        <span
          className="text-white/30 text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          02 — Brands
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="mb-20 lg:mb-28">
          <RevealText delay={0.05}>
            <p
              className="text-white/25 text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              The Portfolio
            </p>
          </RevealText>
          <RevealText delay={0.15}>
            <h2
              className="font-semibold text-white tracking-[-0.03em] leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 7rem)",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              Three Worlds.
            </h2>
          </RevealText>
          <RevealText delay={0.25}>
            <h2
              className="font-semibold tracking-[-0.03em] leading-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 7rem)",
                fontFamily: "var(--font-geist-sans)",
                color: "transparent",
                WebkitTextStroke: "1px rgba(200,149,94,0.4)",
              }}
            >
              One Vision.
            </h2>
          </RevealText>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-white/5">
          {brands.map((brand, i) => (
            <BrandCard key={brand.id} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Mission / Vision ───────────────────────────── */
function MissionVision() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["-6%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["6%", "0%"]);

  return (
    <section
      ref={ref}
      id="mission"
      className="sc-section-bg py-40 lg:py-60 overflow-hidden relative"
    >
      <div className="absolute top-12 right-8 lg:right-16 flex items-center gap-2 opacity-30">
        <span
          className=" text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          03 — Mission
        </span>
        <div className="w-2 h-2 border border-border rotate-45" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Large editorial quote */}
        <div className="mb-32 lg:mb-48">
          <motion.div style={{ x: xLeft }} className="mb-6">
            <p
              className="font-semibold text- leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 8.5rem)",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              "Great brands
            </p>
          </motion.div>
          <motion.div style={{ x: xRight }}>
            <p
              className="font-semibold leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 8.5rem)",
                fontFamily: "var(--font-geist-sans)",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(10,10,10,0.25)",
              }}
            >
              are not built.
            </p>
          </motion.div>
          <motion.div style={{ x: xLeft }}>
            <p
              className="font-semibold text-[#C8955E] leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 8.5rem)",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              They are revealed."
            </p>
          </motion.div>
        </div>

        {/* Mission / Vision columns */}
        <div className="grid lg:grid-cols-12 gap-8">
          <FadeIn delay={0.1} className="lg:col-span-1 hidden lg:block">
            <div className="h-full w-px bg-/8 mx-auto" />
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-5">
            <p
              className="text-/35 text-xs tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Mission
            </p>
            <p
              className="text-/70 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              To engineer hospitality experiences that outlast trends — brands
              anchored in culture, elevated by design, and scaled through
              disciplined execution.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="lg:col-span-1 hidden lg:block">
            <div className="h-full w-px bg-/8 mx-auto" />
          </FadeIn>

          <FadeIn delay={0.25} className="lg:col-span-5">
            <p
              className="text-/35 text-xs tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Vision
            </p>
            <p
              className="text-/70 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              To be the most admired hospitality holding company in South Asia —
              recognized not just for culinary excellence, but for the
              sophistication of the brands we architect.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ScrollStory() {
  return (
    <>
      <WeBuiltBrands />
      <BrandTrio />
      <MissionVision />
    </>
  );
}
