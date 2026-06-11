"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  { label: "General Inquiries", value: "ask@searandco.com", type: "email" },
  { label: "Contact Number", value: "+1 (954) 999-4191", type: "phone" },
  {
    label: "Address",
    value: "3926 Coral Ridge Dr, Coral Springs, Florida 33065, USA",
    type: "address",
  },
];

// const socialLinks = [
//   { label: "Instagram", href: "#" },
//   { label: "LinkedIn", href: "#" },
//   { label: "Twitter / X", href: "#" },
// ];

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="contact"
      className="noise py-5 sm:py-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — headline */}
          <div className="lg:col-span-6 ">
            <div className="overflow-hidden ">
              <motion.p
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8"
              >
                Get in Touch
              </motion.p>
            </div>

            <div className="overflow-hidden pb-5">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className=" font-display font-medium text-4xl md:text-6xl tracking-tight "
              >
                Let&lsquo;s Build br
                <br />
                <span
                  className="text-transparent [-webkit-text-stroke:1px_var(--primary)]"
                  style={{ fontSize: "inherit", fontFamily: "inherit" }}
                >
                  Together.
                </span>
              </motion.h2>
            </div>
            {/* <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display font-medium text-4xl md:text-6xl tracking-tight leading-tight"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 7rem)",
                  fontFamily: "var(--font-geist-sans)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(200,149,94,0.4)",
                }}
              >
                Together.
              </motion.h2>
            </div> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-muted-foreground leading-relaxed max-w-sm"
            >
              Whether you are a prospective partner, investor, or industry
              enthusiast, we would be pleased to hear from you.
            </motion.p>
          </div>

          {/* Right — contact details */}
          <div className="lg:col-span-5 lg:col-start-8 ">
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
                  className="group py-6 border-b border-muted-foreground/20 hover:border-muted-foreground/40 transition-colors duration-300"
                >
                  <p
                    className="text-muted-foreground text-xs tracking-[0.18em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {link.label}
                  </p>
                  <a
                    href={`mailto:${link.value}`}
                    className="text-muted-foreground/70 group-hover:text-foreground text-sm transition-colors duration-300"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {link.value}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Social */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <p
                className="text-muted-foreground text-xs tracking-[0.25em] uppercase mb-6"
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
                    className="text-muted-foreground/30 hover:text-muted-foreground/70 text-xs tracking-widest uppercase transition-colors duration-300"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
