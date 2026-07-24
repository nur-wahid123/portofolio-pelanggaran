import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APELSI - Sistem Pencatatan Pelanggaran Siswa | Technical Portfolio Showcase",
  description: "Web platform terpusat pencatatan, pemantauan, dan manajemen poin pelanggaran siswa real-time. Portofolio teknis Full-Stack & DevOps Engineering.",
  keywords: ["APELSI", "Pelanggaran Siswa", "Full-Stack Portfolio", "DevOps Engineering", "Next.js", "NestJS", "PostgreSQL", "MinIO", "Redis", "Docker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
