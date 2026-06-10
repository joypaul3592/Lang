"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const showcaseItems = [
  {
    id: "01",
    brand: "Flame",
    category: "Live-Fire Dining",
    year: "2018",
    desc: "Where fire is the chef. A primal, visceral dining concept that turns ancient cooking into modern theatre.",
    color: "#E85D26",
    locations: "4 Locations",
    tags: ["Fire Cuisine", "Open Kitchen", "Craft Cocktails"],
  },
  {
    id: "02",
    brand: "Redchili",
    category: "Modern Asian Fusion",
    year: "2020",
    desc: "Contemporary interpretations of Asian spice culture. Sophisticated without losing the soul of the source.",
    color: "#C8182E",
    locations: "5 Locations",
    tags: ["Pan-Asian", "Spice Heritage", "Modern Design"],
  },
  {
    id: "03",
    brand: "Sear & Sizzle",
    category: "Premium Steakhouse",
    year: "2022",
    desc: "A devotion to prime cuts, expert preparation, and an environment that honors the ritual of a great meal.",
    color: "#C8955E",
    locations: "3 Locations",
    tags: ["Prime Beef", "Fine Dining", "Wine Program"],
  },
];

function ShowcaseCard({
  item,
  index,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden cursor-pointer border-r last:border-0 dark:border-border/50 border-black/5"
    >
      {/* Color sweep on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${item.color}12 0%, transparent 70%)`,
        }}
      />

      {/* Top border accent */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: item.color }}
      />

      <div className="relative z-10 p-4 lg:p-7 h-full flex flex-col">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <span
              className="text-muted-foreground text-xs tracking-[0.2em] block mb-1"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {item.id}
            </span>
            <span
              className="text-muted-foreground text-xs tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {item.category}
            </span>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.4 }}
            className="w-6 h-6 border border-border flex items-center justify-center"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 9L9 1M9 1H3M9 1V7"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.2"
              />
            </svg>
          </motion.div>
        </div>

        {/* Brand name */}
        <h3
          className={`font-semibold leading-none tracking-[-0.03em] mb-4 transition-colors duration-300 ${hovered ? item.color : "text-foreground"}`}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 2.5rem)",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          {item.brand}
        </h3>

        <p
          className="text-muted-foreground leading-relaxed mb-8 flex-1"
          style={{ fontFamily: "var(--font-geist-sans)", fontSize: "0.9rem" }}
        >
          {item.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border text-muted-foreground text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <span
            className="text-muted-foreground text-xs tracking-widest"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {item.locations}
          </span>
          <span
            className="text-muted-foreground text-xs tracking-widest"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Est. {item.year}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function BrandShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="showcase"
      className="py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-5 lg:mb-10 max-w-xl">
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground/80 text-xs tracking-[0.3em] uppercase "
            >
              Brand Showcase
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className=" font-semibold  text-4xl md:text-6xl tracking-tight leading-tighter"
            >
              The Portfolio
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_var(--primary)]">
                in Detail.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-reverse/4 ">
          {showcaseItems.map((item, i) => (
            <ShowcaseCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-12 flex items-center justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-muted-foreground hover:text-foreground text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Interested in partnering with us?
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
