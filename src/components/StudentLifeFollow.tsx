import SocialFeed from "@/components/SocialFeed";
import { socialLinks } from "@/lib/social";

function TitleOrnament({ flip = false }: { flip?: boolean }) {
  return (
    <span className="flex items-center gap-2" aria-hidden="true">
      {flip ? (
        <>
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="h-px w-10 bg-gold sm:w-14 md:w-16" />
        </>
      ) : (
        <>
          <span className="h-px w-10 bg-gold sm:w-14 md:w-16" />
          <span className="h-2 w-2 rounded-full bg-gold" />
        </>
      )}
    </span>
  );
}

function InstagramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
      <path
        d="M12 7.6A4.4 4.4 0 1 0 12 16.4 4.4 4.4 0 0 0 12 7.6Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm5.5-7.55a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="ig-gradient"
          x1="3"
          y1="21"
          x2="21"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F58529" />
          <stop offset="0.35" stopColor="#DD2A7B" />
          <stop offset="0.7" stopColor="#8134AF" />
          <stop offset="1" stopColor="#515BD4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M13.4 18.5v-5.3h1.8l.27-2.1h-2.07V9.75c0-.6.17-1.02 1.05-1.02H15.6V6.85c-.18-.02-.8-.08-1.52-.08-1.5 0-2.53.9-2.53 2.56v1.43H9.7v2.1h1.85v5.64h1.85Z"
        fill="white"
      />
    </svg>
  );
}

const links = [
  {
    label: "Follow us on Instagram",
    href: socialLinks.instagram,
    icon: <InstagramIcon />,
  },
  {
    label: "Follow us on Facebook",
    href: socialLinks.facebook,
    icon: <FacebookIcon />,
  },
];

export default function StudentLifeFollow() {
  return (
    <section
      id="follow"
      className="bg-white"
      aria-labelledby="follow-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-gold sm:text-[13px]">
            Follow
          </p>

          <div className="mt-3 flex items-center justify-center gap-3 sm:gap-4">
            <TitleOrnament />
            <h2
              id="follow-heading"
              className="text-2xl font-bold tracking-tight text-[#033F94] sm:text-3xl md:text-[2rem]"
            >
              Student Life
            </h2>
            <TitleOrnament flip />
          </div>

          <p className="mt-5 text-[14px] leading-relaxed text-slate sm:mt-6 sm:text-[15px]">
            See classroom moments, school events, achievements, and everyday
            experiences.
            <br className="hidden sm:block" /> Follow us on Facebook and
            Instagram to stay connected.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:mt-10 sm:flex-row sm:gap-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[14px] font-medium text-slate transition hover:text-navy sm:text-[15px]"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <SocialFeed />
      </div>
    </section>
  );
}