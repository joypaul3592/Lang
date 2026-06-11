"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    n: "01",
    title: "Uncompromising Quality",
    desc: "We uphold the highest standards in ingredient sourcing, preparation, and service execution across every brand and location, every day.",
  },
  {
    n: "02",
    title: "Elevated Guest Experience",
    desc: "Every interaction is intentionally designed to make guests feel valued, comfortable, and eager to return.",
  },
  {
    n: "03",
    title: "Continuous Culinary Innovation",
    desc: "Our teams continuously refine menus and concepts to anticipate evolving dining trends and exceed guest expectations.",
  },
  {
    n: "04",
    title: "Multi-Brand Expertise",
    desc: "Our portfolio approach enables us to serve diverse audiences and dining occasions while maintaining a consistent standard of excellence.",
  },
  {
    n: "05",
    title: "Sustainable Expansion",
    desc: "We scale with intention — building strong operational and brand foundations before expanding into new markets.",
  },
  {
    n: "06",
    title: "Proven Hospitality Legacy",
    desc: "A track record of consistent execution, loyal guests, and brand trust built through authentic hospitality experiences.",
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-12 sm:py-28 lg:py-36">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-0 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 mb-12 lg:mb-0 lg:sticky lg:top-20 lg:self-start"
          >
            <h2 className=" font-display font-medium text-4xl md:text-6xl tracking-tight">
              The Sear &amp;
              <br />
              Co.{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_var(--primary)]">
                Difference
              </span>
            </h2>
          </motion.div>

          {/* Reasons grid */}
          <div className="lg:col-span-2 border border-border divide-y divide-border">
            {Array.from({ length: 3 }).map((_, row) => (
              <div
                key={row}
                className="grid sm:grid-cols-2 divide-x divide-y sm:divide-y-0  divide-border"
              >
                {reasons.slice(row * 2, row * 2 + 2).map((r, col) => (
                  <motion.div
                    key={r.n}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.55,
                      delay: 0.1 + (row * 2 + col) * 0.07,
                    }}
                    className="p-7 lg:p-8"
                  >
                    <span className="block font-display text-2xl font-semibold mb-5 select-none text-primary">
                      {r.n}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground mb-2.5 tracking-wide">
                      {r.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {r.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
