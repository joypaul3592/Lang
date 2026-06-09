/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { ThemeToggle } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative min-h-full antialiased overflow-hidden">
      <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
        <ThemeToggle />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col-reverse items-center gap-10 px-5 py-16 text-center sm:flex-row sm:gap-16 sm:py-20 sm:text-left">
        <div className="error-404 sm:order-0 order-2" aria-hidden="true">
          <span className="error-digit error-digit--one">4</span>
          <span className="error-digit error-digit--two">
            0
            <span className="error-diamond" aria-hidden="true" />
          </span>
          <span className="error-digit error-digit--three">4</span>
        </div>

        <div className="sm:order-0 order-1 mt-8 flex max-w-md flex-col gap-3 text-center sm:mt-20 sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] opacity-40">404</span>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl font-serif">
            Something went wrong!
          </h1>
          <p className="mb-5 text-base leading-6 opacity-70 sm:mb-4">
            The page hit an unexpected issue. Try again to reload the latest state or return home.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full px-5 py-2 text-xs font-semibold  transition hover:-translate-y-0.5 hover:shadow-lg cursor-pointer bg-reverse text-background"
            >
              Try again
            </button>
            <a
              href="/"
              className="rounded-full border px-5 py-2 text-xs font-semibold transition hover:-translate-y-0.5 text-reverse border-reverse/30 hover:border-reverse/60"
            >
              Return home
            </a>
          </div>

          <p className="text-[10px] font-medium uppercase tracking-[0.26em] opacity-40">
            Error Digest: N/A
          </p>
        </div>
      </main>
    </section>
  );
}
