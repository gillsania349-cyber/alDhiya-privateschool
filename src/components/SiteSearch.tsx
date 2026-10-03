"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { searchSite } from "@/lib/search";

type SiteSearchProps = {
  onNavigate?: () => void;
};

export default function SiteSearch({ onNavigate }: SiteSearchProps) {
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => searchSite(query, 6), [query]);
  const showResults = expanded && query.trim().length > 0;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isShortcut =
        (event.key === "k" || event.key === "K") &&
        (event.metaKey || event.ctrlKey);

      if (isShortcut) {
        event.preventDefault();
        setExpanded(true);
        return;
      }

      if (event.key === "Escape") {
        setExpanded(false);
        setQuery("");
        setActiveIndex(0);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!expanded) return;

    const timer = window.setTimeout(() => inputRef.current?.focus(), 180);

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setExpanded(false);
        setQuery("");
        setActiveIndex(0);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [expanded]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const close = () => {
    setExpanded(false);
    setQuery("");
    setActiveIndex(0);
  };

  const handleNavigate = () => {
    onNavigate?.();
    close();
  };

  const openSearch = () => setExpanded(true);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <div
        className={`flex h-10 items-center overflow-hidden rounded-full border bg-[#F3F6FA] text-navy transition-all duration-300 ease-out ${
          expanded
            ? "w-[min(68vw,240px)] border-navy/20 bg-white shadow-sm sm:w-[260px]"
            : "w-10 border-navy/10 hover:border-navy/20 hover:bg-[#E8EEF6]"
        }`}
      >
        <button
          type="button"
          onClick={openSearch}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-navy/55 transition hover:text-navy focus-visible:outline-none"
          aria-label="Search the site"
          aria-expanded={expanded}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="6.5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16.5 16.5L21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={openSearch}
          onKeyDown={(event) => {
            if (!showResults) return;

            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActiveIndex((index) =>
                Math.min(results.length - 1, index + 1),
              );
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex((index) => Math.max(0, index - 1));
            } else if (event.key === "Enter" && results[activeIndex]) {
              event.preventDefault();
              window.location.href = results[activeIndex].href;
              handleNavigate();
            }
          }}
          placeholder="Search..."
          className={`h-full min-w-0 flex-1 bg-transparent pr-2 text-[13px] text-navy outline-none placeholder:text-navy/40 transition-opacity duration-200 ${
            expanded
              ? "opacity-100"
              : "pointer-events-none w-0 p-0 opacity-0"
          }`}
          aria-controls={listboxId}
          aria-autocomplete="list"
          tabIndex={expanded ? 0 : -1}
        />

        {expanded && query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="mr-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-navy/40 transition hover:bg-navy/5 hover:text-navy"
            aria-label="Clear search"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {showResults && (
        <div className="absolute top-[calc(100%+0.5rem)] right-0 z-[80] w-[min(92vw,320px)] overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_20px_50px_-20px_rgba(11,31,77,0.45)]">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-[13px] font-semibold text-navy">
                No results for “{query.trim()}”
              </p>
              <p className="mt-1 text-[12px] text-slate">
                Try admissions, fees, or contact.
              </p>
            </div>
          ) : (
            <ul id={listboxId} role="listbox" className="max-h-[320px] overflow-y-auto p-1.5">
              {results.map((result, index) => {
                const active = index === activeIndex;
                return (
                  <li key={result.id} role="option" aria-selected={active}>
                    <Link
                      href={result.href}
                      onClick={handleNavigate}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`block rounded-xl px-3 py-2.5 transition ${
                        active ? "bg-navy text-white" : "hover:bg-navy/5"
                      }`}
                    >
                      <span className="block truncate text-[13px] font-semibold">
                        {result.title}
                      </span>
                      <span
                        className={`mt-0.5 block truncate text-[11.5px] ${
                          active ? "text-white/70" : "text-slate"
                        }`}
                      >
                        {result.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
