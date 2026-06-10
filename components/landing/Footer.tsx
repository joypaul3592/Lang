const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Our Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const brands = [
  { label: "Flame", href: "#brands" },
  { label: "Redchili", href: "#brands" },
  { label: "Sear & Sizzle", href: "#brands" },
];

const social = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#04091c] text-white">
      {/* Top strip */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 border-b border-white/8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="leading-none">
          <div className="font-display text-2xl font-bold tracking-[0.22em]">
            SEAR
          </div>
          <div className="font-display text-[9px] font-semibold text-[#a67c2a] tracking-[0.5em]">
            &amp;&nbsp;CO.
          </div>
        </div>
        <p className="text-white/35 text-sm max-w-xs leading-relaxed">
          A hospitality group dedicated to extraordinary dining across three
          distinctive brands.
        </p>
        <div className="flex gap-2">
          {social.map(({ label, href, svg }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-12 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/25 mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/25 mb-6">
            Our Brands
          </h4>
          <ul className="space-y-3">
            {brands.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/25 mb-6">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/45">
            <li>hello@searandco.com</li>
            <li>+880 1XXX-XXXXXX</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Office */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white/25 mb-6">
            Office Hours
          </h4>
          <ul className="space-y-3 text-sm text-white/45">
            <li>Sun – Thu</li>
            <li>9:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 border-t border-white/8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/20 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Sear &amp; Co. All rights reserved.
        </p>
        <p className="text-white/12 text-xs tracking-wider">
          Flame &middot; Redchili &middot; Sear &amp; Sizzle
        </p>
      </div>
    </footer>
  );
}
