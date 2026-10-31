"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

type GradeSelectProps = {
  id?: string;
  name?: string;
  value: string;
  options: string[];
  required?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function GradeSelect({
  id,
  name = "grade",
  value,
  options,
  required = false,
  placeholder = "Select grade",
  onChange,
}: GradeSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const selectedLabel = value || placeholder;
  const isPlaceholder = !value;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const index = Math.max(
      0,
      options.findIndex((option) => option === value),
    );
    setActiveIndex(index);
  }, [open, options, value]);

  const choose = (next: string) => {
    onChange(next);
    setOpen(false);
  };

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, Math.max(0, i + 1)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(0, i <= 0 ? 0 : i - 1));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      choose(options[activeIndex]);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(options.length - 1);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <input
        type="text"
        name={name}
        value={value}
        required={required}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        readOnly
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
        className={`group flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-[14px] outline-none transition duration-200 ${
          open
            ? "border-gold bg-white shadow-[0_0_0_4px_rgba(212,160,23,0.18)]"
            : isPlaceholder
              ? "border-dashed border-navy/20 bg-[#f8fafc] hover:border-navy/30 hover:bg-white focus:border-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,160,23,0.18)]"
              : "border-navy/10 bg-[#f8fafc] hover:border-navy/25 hover:bg-white focus:border-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,160,23,0.18)]"
        }`}
      >
        <span className="flex min-w-0 items-center gap-2.5">
          {value ? (
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-navy text-gold"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 19h16M7 17V9.8c0-.4.2-.8.5-1L12 5l4.5 3.8c.3.2.5.6.5 1V17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 17v-4h4v4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ) : null}
          <span
            className={`truncate ${
              isPlaceholder ? "font-normal text-navy/40" : "font-medium text-navy"
            }`}
          >
            {selectedLabel}
          </span>
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy transition duration-200 ${
            open ? "rotate-180 bg-gold/15 text-navy" : "group-hover:bg-navy/10"
          }`}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Grade options"
          tabIndex={-1}
          onKeyDown={onListKeyDown}
          className="absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-navy/10 bg-white p-1.5 shadow-[0_18px_50px_-20px_rgba(11,31,77,0.45)] animate-fade-up"
        >
          {options.map((option, index) => {
            const selected = option === value;
            const active = index === activeIndex;
            return (
              <li key={option} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(option)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13.5px] font-medium transition ${
                    selected
                      ? "bg-navy text-white"
                      : active
                        ? "bg-gold/15 text-navy"
                        : "text-slate hover:bg-navy/5"
                  }`}
                >
                  <span>{option}</span>
                  {selected && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}