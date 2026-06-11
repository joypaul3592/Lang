"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    value: 3,
    suffix: "",
    label: "Distinct Brands",
    sub: "Flame · Sear & Sizzle",
  },
  {
    value: 12,
    suffix: "+",
    label: "Active Outlets",
    sub: "Across multiple cities",
  },
  {
    value: 200,
    suffix: "+",
    label: "Team Members",
    sub: "Hospitality professionals",
  },
  {
    value: 50,
    suffix: "K+",
    label: "Happy Customers",
    sub: "And growing every day",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function Counter({
  value,
  suffix,
  run,
}: {
  value: number;
  suffix: string;
  run: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const total = 80;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (frame >= total) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [run, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="highlights" className="bg-[#04091c]">
      <div ref={ref} className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Numbers grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8 border-b border-white/8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
              className="py-16 px-8 text-center"
            >
              <div className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 tabular-nums leading-none">
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                  run={isInView}
                />
              </div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-1.5">
                {item.label}
              </div>
              <div className="text-white/25 text-[10px] tracking-wide">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
