import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import WhatsAppChat from "@/components/WhatsAppChat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Al Dhiya International Private School",
  description:
    "Al Dhiya International Private School is dedicated to academic excellence and values, preparing students to become confident, compassionate and responsible global citizens.",
  icons: {
    icon: [{ url: "/assets/tab-logo.webp", type: "image/webp" }],
    apple: [{ url: "/assets/tab-logo.webp", type: "image/webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
