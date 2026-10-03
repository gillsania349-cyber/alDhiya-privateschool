import { facebookEmbedSrc, instagramEmbedSrc, socialLinks } from "@/lib/social";

export default function SocialFeed() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
      <article className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-[#f8fafc] shadow-[0_18px_40px_-28px_rgba(11,31,77,0.35)]">
        <div className="flex items-center justify-between gap-3 border-b border-navy/8 px-4 py-3.5 sm:px-5">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] text-gold uppercase">
              Live feed
            </p>
            <h3 className="mt-0.5 text-[15px] font-bold text-navy sm:text-[16px]">
              Instagram
            </h3>
          </div>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy px-3.5 py-1.5 text-[12px] font-semibold text-white transition hover:bg-navy-deep"
          >
            @aldhiyainternational
          </a>
        </div>
        <div className="relative min-h-[480px] bg-white sm:min-h-[540px]">
          <iframe
            title="Al Dhiya Instagram feed"
            src={instagramEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="encrypted-media; clipboard-write"
          />
        </div>
      </article>

      <article className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-[#f8fafc] shadow-[0_18px_40px_-28px_rgba(11,31,77,0.35)]">
        <div className="flex items-center justify-between gap-3 border-b border-navy/8 px-4 py-3.5 sm:px-5">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] text-gold uppercase">
              Live feed
            </p>
            <h3 className="mt-0.5 text-[15px] font-bold text-navy sm:text-[16px]">
              Facebook
            </h3>
          </div>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy px-3.5 py-1.5 text-[12px] font-semibold text-white transition hover:bg-navy-deep"
          >
            Open page
          </a>
        </div>
        <div className="relative min-h-[480px] bg-white sm:min-h-[540px]">
          <iframe
            title="Al Dhiya Facebook page feed"
            src={facebookEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </article>
    </div>
  );
}