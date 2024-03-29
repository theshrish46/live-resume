import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/site-components/NavBar";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Resume",
  description: "Create stunning resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex  flex-col min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            storageKey="resume-theme"
            enableSystem={false}
          >
            <NavBar />
            <div>{children}</div>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
