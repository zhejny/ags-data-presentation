import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zachary Hejny | A Green Stream (2018)",
  description:
    "Generative data visualization, audio playback, and staff notation for the 2018 composition 'A Green Stream' by Zachary Hejny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col height-100vh">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
