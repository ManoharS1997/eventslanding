import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wonevents.com"),

  title: {
    default: "WON Events – Event Management & Ticket Booking Platform",
    template: "%s | WON Events",
  },

  description:
    "WON Events is a complete event management and ticket booking platform for organizers and attendees. Create events, sell tickets, manage stalls, track revenue, and collaborate with partners using a secure and scalable ecosystem.",

  keywords: [
    "WON Events",
    "wonevents",
    "event management platform",
    "event ticket booking platform",
    "online ticket booking system",
    "event booking website",
    "event organizer software",
    "event management software India",
    "event ticketing system",
    "event SaaS platform",
    "concert ticket booking",
    "festival ticket booking",
    "expo management system",
    "conference management software",
    "stall booking system",
    "event partner collaboration platform",
    "event business management",
    "event dashboard software",
    "online event platform India",
    "ticket booking app",
    "event platform for organizers",
  ],

  authors: [
    { name: "NOWIT Services Pvt. Ltd.", url: "https://nowitservices.com" },
  ],

  creator: "NOWIT Services Pvt. Ltd.",
  publisher: "NOWIT Services Pvt. Ltd.",

  alternates: {
    canonical: "https://wonevents.com",
  },

  openGraph: {
    title: "WON Events – Complete Event Ecosystem",
    description:
      "Create, manage, and grow your events with WON Events. Secure ticket booking, stall management, partner collaboration, and real-time revenue tracking.",
    url: "https://wonevents.com",
    siteName: "WON Events",
    images: [
      {
        url: "https://wonevents.com/open.png",
        width: 1200,
        height: 630,
        alt: "WON Events Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WON Events – Event Management Platform",
    description:
      "Complete event ecosystem for organizers and attendees. Manage events, sell tickets, and track revenue with WON Events.",
    images: ["https://wonevents.com/open.png"],
    creator: "@wonevents",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
