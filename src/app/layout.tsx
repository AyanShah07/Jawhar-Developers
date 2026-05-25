import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "APEX Construction — Engineering Tomorrow's Landmarks",
  description:
    "Premium construction company delivering world-class commercial, residential, and industrial projects with precision engineering and architectural excellence.",
  keywords:
    "construction company, commercial construction, residential projects, industrial infrastructure, architecture, engineering",
  openGraph: {
    title: "APEX Construction — Engineering Tomorrow's Landmarks",
    description:
      "Premium construction delivering architectural excellence across commercial, residential, and industrial sectors.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Construction",
    description: "Engineering Tomorrow's Landmarks",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0F1115] text-[#F5F5F2] antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
