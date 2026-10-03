"use client";

import Link from "next/link";
import SiteSearch from "@/components/SiteSearch";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why Aldhiya?", href: "/why-aldhiya" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "News", href: "/#news" },
];

const homeSectionHashes = new Set(
  navLinks
    .filter((link) => link.href.includes("#"))
    .map((link) => link.href.split("#")[1]),
);

function getHash() {
  if (typeof window === "undefined") return "";
  return window.location.hash.replace(/^#/, "");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const syncHash = () => setHash(getHash());
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isActive = (href: string) => {
    const [pathPart, linkHash] = href.split("#");
    const targetPath = pathPart || "/";

    if (linkHash) {
      return pathname === targetPath && hash === linkHash;
    }

    if (targetPath === "/") {
      return pathname === "/" && !homeSectionHashes.has(hash);
    }

    return pathname === targetPath || pathname.startsWith(`${targetPath}/`);
  };

  const handleNavClick = (href: string) => {
    const linkHash = href.includes("#") ? href.split("#")[1] : "";
    setHash(linkHash);
    setOpen(false);

    if (href === "/" && pathname === "/" && typeof window !== "undefined") {
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <Link
          href="/"
          onClick={() => handleNavClick("/")}
          className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <img
            className="h-[48px] w-[48px] shrink-0 rounded-full object-contain sm:h-[52px] sm:w-[52px]"
            src="/assets/site-logo.webp"
            alt="Al Dhiya International Private School logo"
          />
          <span className="flex min-w-0 flex-col leading-tight text-[#033F94]">
            <span className="text-[15px] font-bold tracking-tight sm:text-[17px]">
              Al Dhiya
            </span>
            <span className="hidden text-[11px] font-medium sm:block">
              International Private School
            </span>
          </span>
        </Link>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-4">
          <nav
            className="hidden items-center gap-4 xl:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`nav-link relative whitespace-nowrap pb-1 text-[13px] font-medium transition-colors hover:text-navy 2xl:text-[14px] ${
                  isActive(link.href)
                    ? "nav-link--active text-navy"
                    : "text-slate"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <SiteSearch onNavigate={() => setOpen(false)} />
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-full bg-navy px-4 text-[13px] font-semibold text-white transition hover:bg-navy-deep md:inline-flex"
          >
            Contact
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy/5 bg-white px-4 py-4 sm:px-6 xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-gold/10 text-navy"
                    : "text-slate hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-navy px-3 py-3 text-center text-sm font-semibold text-white md:hidden"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}