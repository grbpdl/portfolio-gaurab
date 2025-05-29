import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurab Paudyal | Full Stack Developer",
  description:
    "Explore the portfolio of Gaurab Paudyal, a passionate Full Stack Developer showcasing projects, skills, and professional experience in web development.",
  authors: [
    { name: "Gaurab Paudyal", url: "https://www.gaurabpaudyal.com.np" },
  ],
  creator: "Gaurab Paudyal <paudyal.gaurab11@gmail.com>",
  keywords: [
    "Gaurab Paudyal",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
    "Tailwind CSS",
    "Software Engineer",
    "Developer Portfolio",
    "Personal Website",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gaurabpaudyal.com.np",
    title: "Gaurab Paudyal | Full Stack Developer",
    description:
      "Discover Gaurab Paudyal's portfolio featuring modern web applications, full stack projects, and development expertise.",
    siteName: "Gaurab Paudyal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurab Paudyal | Full Stack Developer",
    description:
      "Showcasing the work and skills of Gaurab Paudyal, a creative and efficient Full Stack Developer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
