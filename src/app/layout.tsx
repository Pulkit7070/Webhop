import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper";
import WhatsAppButton from "@/components/whatsapp-button";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
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
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ClientLayoutWrapper>
          <Navigation />
          <main className="pt-16">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
