import { socialLinks } from "@/lib/social";

const admissions = [
  { label: "School Fees", href: "/admissions#fees" },
  { label: "Admissions Process", href: "/admissions#process" },
  { label: "Open Hours", href: "/admissions#faq" },
];

const curriculum = [
  { label: "School Curriculum", href: "#academics" },
  { label: "Assessments", href: "#academics" },
  { label: "Activities & Competitions", href: "/student-life" },
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Al+Dhiya+International+Private+School+Salalah+Oman&hl=en&z=16&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Al+Dhiya+International+Private+School+Salalah+Oman";

const social = [
  {
    label: "Facebook",
    href: socialLinks.facebook,
    icon: (
      <path
        d="M14 8h2.5V4.5H14c-2.2 0-3.5 1.4-3.5 3.6V10H8v3.5h2.5V22h3.5v-8.5H17L17.5 10h-3.5V8.4c0-.7.2-1.1 1-1.1V8Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "YouTube",
    href: socialLinks.youtube,
    icon: (
      <path
        d="M19.6 7.2a2.2 2.2 0 0 0-1.5-1.6C16.6 5.2 12 5.2 12 5.2s-4.6 0-6.1.4A2.2 2.2 0 0 0 4.4 7.2 23 23 0 0 0 4 12a23 23 0 0 0 .4 4.8 2.2 2.2 0 0 0 1.5 1.6c1.5.4 6.1.4 6.1.4s4.6 0 6.1-.4a2.2 2.2 0 0 0 1.5-1.6A23 23 0 0 0 20 12a23 23 0 0 0-.4-4.8ZM10.5 14.8V9.2L15 12l-4.5 2.8Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: (
      <path
        d="M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM12 3.5c-2.3 0-2.6 0-3.5.05a4.7 4.7 0 0 0-3.3 1.2 4.7 4.7 0 0 0-1.2 3.3C4 9 4 9.3 4 11.6s0 2.6.05 3.5a4.7 4.7 0 0 0 1.2 3.3 4.7 4.7 0 0 0 3.3 1.2c.9.05 1.2.05 3.45.05s2.55 0 3.45-.05a4.7 4.7 0 0 0 3.3-1.2 4.7 4.7 0 0 0 1.2-3.3c.05-.9.05-1.2.05-3.45s0-2.55-.05-3.45a4.7 4.7 0 0 0-1.2-3.3 4.7 4.7 0 0 0-3.3-1.2C14.6 3.5 14.3 3.5 12 3.5Zm0 1.6c2.3 0 2.5 0 3.4.05a3.1 3.1 0 0 1 2.15.8 3.1 3.1 0 0 1 .8 2.15c.05.85.05 1.1.05 3.4s0 2.55-.05 3.4a3.1 3.1 0 0 1-.8 2.15 3.1 3.1 0 0 1-2.15.8c-.9.05-1.1.05-3.4.05s-2.5 0-3.4-.05a3.1 3.1 0 0 1-2.15-.8 3.1 3.1 0 0 1-.8-2.15C5.55 14.15 5.55 13.9 5.55 11.6s0-2.55.05-3.4a3.1 3.1 0 0 1 .8-2.15 3.1 3.1 0 0 1 2.15-.8c.9-.05 1.1-.05 3.45-.05Z"
        fill="currentColor"
      />
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-navy/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <a href="#home" className="flex items-center gap-3 sm:gap-4">
              <img
                className="h-[60px] w-[60px] shrink-0 rounded-full object-contain"
                src="/assets/site-logo.webp"
                alt="Al Dhiya International Private School logo"
              />

              <span className="flex flex-col leading-tight text-[#033F94]">
                <span className="text-[18px] font-bold tracking-tight sm:text-[20px] md:text-[22px]">
                  Al Dhiya
                </span>
                <span className="text-[12px] font-medium sm:text-[13px]">
                  International Private School
                </span>
              </span>
            </a>

            <div className="mt-4 flex items-center gap-2.5 sm:mt-5 sm:gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-gold transition hover:border-gold hover:bg-gold/5 hover:text-navy sm:h-11 sm:w-11"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[14px] font-bold text-gold sm:text-[15px]">
              Admissions
            </h3>
            <ul className="mt-2.5 space-y-2 sm:mt-3">
              {admissions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-navy transition hover:text-gold sm:text-[13.5px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[14px] font-bold text-gold sm:text-[15px]">
              Curriculum
            </h3>
            <ul className="mt-2.5 space-y-2 sm:mt-3">
              {curriculum.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-navy transition hover:text-gold sm:text-[13.5px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[14px] font-bold text-gold sm:text-[15px]">
              Contact us
            </h3>
            <div className="mt-2.5 space-y-3 text-[13px] leading-relaxed text-slate sm:mt-3 sm:text-[13.5px]">
              <p>
                P.O.Box: 1735, Postal Code: 211, Salalah, Sultanate of Oman.
              </p>
              <a
                href="tel:+96895882848"
                className="inline-block transition hover:text-gold"
              >
                +968 9588 2848
              </a>
              <a
                href="/contact"
                className="block font-semibold text-navy transition hover:text-gold"
              >
                Send an inquiry →
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <div className="overflow-hidden rounded-lg border border-navy/10 shadow-sm">
              <div className="relative aspect-[16/10] w-full sm:aspect-[4/3] lg:min-h-[160px]">
                <iframe
                  title="Al Dhiya International Private School location map"
                  src={MAP_EMBED_SRC}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[12px] font-medium text-navy/70 transition hover:text-gold"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] leading-relaxed text-slate sm:mt-10 sm:text-[12px] md:mt-12 md:text-[13px]">
          2026 Al Dhiya International School. All Rights Reserved ©
        </p>
      </div>
    </footer>
  );
}
