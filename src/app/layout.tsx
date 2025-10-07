import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/theme/theme-provider";
import { geistMono, geistSans } from "@/fonts";
import { ChatWars } from "@/features/chatwars";
import { Navbar } from "@/components/ui/navbar";

import "./globals.css";

export const viewport: Viewport = {
  initialScale: 1.0,
  interactiveWidget: 'resizes-content',
  width: 'device-width'
};

export const metadata: Metadata = {
  title: {
    template: 'Chatwars | %s',
    default: 'Chatwars'
  },
  applicationName: 'ChatWars',
  keywords: ['Star Wars', 'Starwars', 'ChatWars'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} p-4 min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <ChatWars />
        </ThemeProvider>
      </body>
    </html>
  );
}
