import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebHop - Web Design for Local Businesses",
  description: "High-converting, mobile-first websites for cafes, gyms, restaurants, and service businesses. Get more customers with a professional website.",
  keywords: ["web design", "local business", "website development", "Mumbai", "India", "cafe website", "restaurant website", "gym website"],
  authors: [{ name: "WebHop" }],
  openGraph: {
    title: "WebHop - Web Design for Local Businesses",
    description: "High-converting, mobile-first websites for cafes, gyms, restaurants, and service businesses.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayoutWrapper fontClassNames={`${geistSans.variable} ${geistMono.variable}`}>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
