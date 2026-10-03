export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100054391095561",
  instagram: "https://www.instagram.com/aldhiyainternational/",
  youtube: "https://www.youtube.com/channel/UCSab1eBs6hJp8PLfyOx6OAw",
  /** No verified LinkedIn profile found yet */
  linkedin: null as string | null,
} as const;

export const instagramHandle = "aldhiyainternational";

export const facebookEmbedSrc =
  "https://www.facebook.com/plugins/page.php?" +
  new URLSearchParams({
    href: socialLinks.facebook,
    tabs: "timeline",
    width: "500",
    height: "620",
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  }).toString();

export const instagramEmbedSrc =
  `https://www.instagram.com/${instagramHandle}/embed`;