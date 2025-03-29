import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Head from 'next/head';
import { Toaster } from "@/components/ui/toaster"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const title = "Hexagun | Desarrollo de Software y Consultoría en TI"
const url = "https://hexagun.mx"
const image = "/seo-hexagun.png"

export const metadata: Metadata = {
  title: title,
  description:"Ayudamos a las empresas a crecer, disminuyendo costos e incrementando utilidades con el uso de tecnología",
  metadataBase: new URL(url),
  openGraph: {
    url :url,
    siteName: title,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: image,
        width: 200,
        height: 200
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
     canonical: url,
    types: {
      "application/rss+xml": url+"/rss.xml"
    }
  },
  applicationName: title,
  appleWebApp: {
    title: title,
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "YOUR_DATA",
    yandex: ["YOUR_DATA"],
    other: {
      "msvalidate.01": ["YOUR_DATA"],
      "facebook-domain-verification": ["YOUR_DATA"]
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png"
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png"
      },
      {
        url: "/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        url: "/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png"
      },
      {
        url: "/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png"
      },
      {
        url: "/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png"
      },
      {
        url: "/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        url: "/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        url: "/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
