"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DemoCredentialsModal } from "@/components/demo-credentials-modal";
import {
  Sparkles,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  Lock,
  Server,
  Database,
  Cpu,
  Container,
  Code2,
  Clock,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Image as ImageIcon,
  Sun,
  Moon,
  HardDrive,
  Zap,
  ExternalLink,
  Mail,
  Linkedin,
  Send,
} from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export default function SinglePagePortfolio() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<number>(0);

  // Live App Demo URL (configurable via env variable or default)
  const liveDemoUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://pelanggaran-saas.indranurwahid.my.id";

  // Contact Links (configurable via env variables or default)
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "fajarnurwahid99@gmail.com";
  const contactWhatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "https://wa.me/6287743886185";
  const contactLinkedin = process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || "https://www.linkedin.com/in/indra-fajar-nurwahid-68b30428a";

  // Sync dark mode class and document title
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    document.title = lang === "id"
      ? "APELSI - Sistem Pencatatan Pelanggaran Siswa | Technical Portfolio Showcase"
      : "APELSI - Student Violation Recording System | Technical Portfolio Showcase";
  }, [lang]);

  // Content dictionary for ID & EN
  const t = {
    topBar: lang === "id"
      ? "Case Study Portofolio Teknis: Full-Stack & DevOps Engineering Showcase"
      : "Technical Case Study Portfolio: Full-Stack & DevOps Engineering Showcase",
    nav: {
      overview: lang === "id" ? "Overview" : "Overview",
      problems: lang === "id" ? "Masalah & Solusi" : "Problem & Solution",
      features: lang === "id" ? "Fitur Utama" : "Key Features",
      architecture: lang === "id" ? "Arsitektur" : "Architecture",
      engineering: lang === "id" ? "Teknikal" : "Engineering",
      impact: lang === "id" ? "Dampak" : "Impact",
      screenshots: lang === "id" ? "Showcase Visual" : "Visual Showcase",
      contact: lang === "id" ? "Kontak" : "Contact",
      tryDemo: lang === "id" ? "Coba Akun Demo" : "Try Live Demo",
    },
    hero: {
      role: "Full-Stack & DevOps Engineer",
      titlePrefix: lang === "id" ? "Aplikasi Pencatatan Pelanggaran Siswa" : "Student Violation Recording System",
      abbreviation: "(APELSI)",
      sub: lang === "id"
        ? "Web platform terpusat yang dirancang untuk membantu guru mencatat, memantau, dan mengelola poin pelanggaran siswa secara real-time guna menggantikan sistem rekapitulasi manual berbasis kertas."
        : "A centralized web platform designed to assist teachers in recording, monitoring, and managing student violation points in real-time, replacing paper-based manual recapitulation systems.",
      btnDemo: lang === "id" ? "Coba Akun Demo Aplikasi" : "Try Live Demo Application",
      btnGithub: lang === "id" ? "Repository GitHub" : "GitHub Repository",
    },
    problems: {
      tag: lang === "id" ? "2. Masalah & Solusi Sistem" : "2. Problem & Solution Statement",
      title: lang === "id" ? "Mengapa Aplikasi Ini Diperlukan?" : "Why Was APELSI Built?",
      sub: lang === "id"
        ? "Transformasi dari tantangan rekapitulasi manual berbasis kertas menuju ekosistem digital terpadu."
        : "Transforming manual paper-based recapitulation into an integrated digital ecosystem.",
      beforeTag: "BEFORE (Manual Paper-based)",
      beforeTitle: lang === "id" ? "Tantangan & Kendala Manual" : "Manual System Bottlenecks",
      p1Title: lang === "id" ? "Pencatatan Manual Berbasis Kertas" : "Manual Paper-Based Record Keeping",
      p1Desc: lang === "id"
        ? "Guru BK dan wali kelas kesulitan mencatat serta melacak riwayat pelanggaran secara akurat di tengah banyaknya berkas fisik."
        : "Counselors and homeroom teachers struggle to record and trace violation history accurately among physical paperwork.",
      p2Title: lang === "id" ? "Risiko Kehilangan Data & Kerusakan Rekap" : "Risk of Data Loss & Physical Damage",
      p2Desc: lang === "id"
        ? "Rekapitulasi fisik rawan hilang, terselip, atau rusak, menyebabkan histori akumulasi sanksi siswa tidak valid."
        : "Physical logbooks are prone to damage or misplacement, undermining the validity of cumulative penalty points.",
      p3Title: lang === "id" ? "Keterlambatan Pelaporan ke Orang Tua/Sekolah" : "Delayed Reporting to Parents & School Board",
      p3Desc: lang === "id"
        ? "Proses rekap harian/bulanan lambat sehingga sulit memberikan laporan transparan kepada kepala sekolah dan wali murid."
        : "Slow monthly re-tallying hinders rapid transparent reporting to school boards and student guardians.",
      afterTag: "AFTER (Solusi APELSI)",
      afterTitle: lang === "id" ? "Solusi Terintegrasi APELSI" : "APELSI Integrated Solution",
      s1Title: lang === "id" ? "Input Terpusat & Poin Otomatis" : "Centralized Entry & Auto Point Weighting",
      s1Desc: lang === "id"
        ? "Form pencatatan instan dengan kalkulasi pembobotan poin otomatis sesuai standar aturan sekolah."
        : "Instant entry form with automated point accumulation adhering to school discipline rules.",
      s2Title: lang === "id" ? "Cloud DB (PostgreSQL, MinIO, & Redis)" : "Cloud DB (PostgreSQL, MinIO, & Redis)",
      s2Desc: lang === "id"
        ? "Data disimpan aman pada PostgreSQL dengan bukti fisik di MinIO S3 Local Cloud Storage & performa cepat didukung Redis Caching."
        : "Data is securely persisted in PostgreSQL with evidence stored on MinIO S3 Local Cloud Storage & fast caching powered by Redis.",
      s3Title: lang === "id" ? "Dashboard Real-time & Ekspor Otomatis" : "Real-time Dashboard & Automated Export",
      s3Desc: lang === "id"
        ? "Ekspor laporan evaluasi berbentuk file PDF/Excel dalam hitungan detik untuk keperluan rapat kedisiplinan."
        : "Export evaluation reports into PDF/Excel files in seconds for disciplinary review meetings.",
    },
    features: {
      tag: lang === "id" ? "3. Fitur Utama Platform" : "3. Core Features Showcase",
      title: lang === "id" ? "Fitur Dirancang Khusus untuk Pengguna" : "Features Tailored for School Workflow",
      sub: lang === "id"
        ? "Setiap modul dibangun dengan memperhatikan efisiensi alur kerja guru, konselor BK, dan manajemen sekolah."
        : "Modules engineered to streamline duty teachers, guidance counselors, and school administrators.",
      f1Title: "Quick Violation Entry",
      f1Desc: lang === "id"
        ? "Form khusus guru & admin untuk menginput pelanggaran siswa secara instan lengkap dengan kategori, poin pembobotan otomatis, dan foto bukti ke MinIO Object Storage."
        : "Dedicated entry form for rapid student violation entry with automatic category point calculation and evidence photo uploads to MinIO S3 Storage.",
      f2Title: "Student History Tracking",
      f2Desc: lang === "id"
        ? "Dashboard interaktif didukung Redis caching untuk mengakses rekam jejak akumulasi poin pelanggaran siswa, histori tindak lanjut, dan tingkatan sanksi (SP1–SP3)."
        : "Interactive ledger powered by Redis caching tracking student cumulative violation points, counseling action logs, and warning levels (SP1–SP3).",
      f3Title: "Role-Based Access (RBAC)",
      f3Desc: lang === "id"
        ? "Otorisasi 2 peran utama: Admin Sekolah (memasukkan data master siswa, kelas, jenis pelanggaran, & kontrol penuh) dan Guru/BK/Tatib (input data pelanggaran & memantau dashboard)."
        : "Streamlined 2-tier authorization: School Admin (master data input for students, classes, violation types & full control) and Teachers/Counselors (data entry & dashboard monitoring).",
      f4Title: "Export PDF/Excel Reports",
      f4Desc: lang === "id"
        ? "Fitur rekapitulasi data otomatis dalam format PDF dan Excel siap cetak untuk keperluan rapat evaluasi bersama komite sekolah dan orang tua."
        : "Automated report generation in print-ready PDF and Excel (.xlsx) formats for evaluation meetings with school boards and parents.",
      tryApp: lang === "id" ? "Buka di aplikasi live" : "Open in live app",
    },
    techStack: {
      tag: lang === "id" ? "4. Teknologi & Arsitektur" : "4. Tech Stack & Architecture",
      title: "Tech Stack & Infrastructure Design",
      sub: lang === "id"
        ? "Kombinasi teknologi modern untuk performa tinggi, keamanan data, dan skalabilitas ekosistem full-stack."
        : "Modern technology stack chosen for high performance, data security, and full-stack scalability.",
      archTitle: "System Architecture Flow Diagram",
    },
    engineering: {
      tag: "5. Engineering Highlights",
      title: lang === "id" ? "Tantangan Teknis & Keputusan Desain" : "Technical Challenges & Design Decisions",
      sub: lang === "id"
        ? "Pendekatan arsitektur dan optimasi teknik yang diterapkan untuk menyelesaikan masalah kompleks."
        : "Architectural approaches and technical optimizations implemented to solve complex requirements.",
      e1Title: lang === "id" ? "Desain Skema Database & Caching Redis" : "Database Schema Design & Redis Caching",
      e1Desc: lang === "id"
        ? "Merancang relasi tabel `siswa`, `pelanggaran`, dan `sanksi` pada PostgreSQL dengan indexing serta Redis in-memory cache untuk rekap poin ultra-cepat."
        : "Designed PostgreSQL tables bound with indexes & leveraged Redis in-memory caching to achieve ultra-fast point tally queries.",
      e1Res: lang === "id" ? "⚡ Result: Performa query laporan tetap ultra-responsif (<20ms) dengan Redis caching layer." : "⚡ Result: Report aggregation query response optimized to <20ms using Redis caching layer.",
      e2Title: lang === "id" ? "Autentikasi 2-Role JWT & Guard RBAC" : "2-Role JWT Auth & Guard Access Matrix",
      e2Desc: lang === "id"
        ? "Mengimplementasikan otorisasi 2 role (Admin & Guru). Guru dapat mencatat dan melihat dashboard; Admin mengendalikan master data siswa, kelas, jenis pelanggaran, serta laporan."
        : "Implemented 2-tier JWT authorization (Admin & Teacher). Teachers enter violations and view dashboard; Admin manages master data (students, classes, types) and exports.",
      e2Res: lang === "id" ? "🛡️ Result: Pengelolaan hak akses ringkas, aman, dan tepat sasaran operasional sekolah." : "🛡️ Result: Streamlined, secure role isolation tailored specifically to school operations.",
      e3Title: lang === "id" ? "MinIO Object Storage & Docker DevOps" : "MinIO S3 Object Storage & Docker DevOps",
      e3Desc: lang === "id"
        ? "Membungkus modul frontend/backend ke Docker container dan menggunakan MinIO S3 Local Cloud Storage untuk penyimpanan bukti foto fisik."
        : "Encapsulated modules into multi-stage Docker builds and integrated MinIO S3 Object Storage for physical evidence image uploads.",
      e3Res: lang === "id" ? "🐳 Result: S3-compatible media storage & zero environment mismatch." : "🐳 Result: S3-compatible media storage API & zero environment mismatch.",
    },
    impact: {
      tag: lang === "id" ? "6. Dampak & Hasil Project" : "6. Impact & Measurable Results",
      title: lang === "id" ? "Hasil Konkret Digitalisasi" : "Measurable Outcomes of Digitalization",
      sub: lang === "id"
        ? "Metrik pencapaian dan efisiensi yang terbukti setelah pengaplikasian sistem APELSI."
        : "Proven metrics and operational efficiency achieved following APELSI implementation.",
      m1Title: lang === "id" ? "Efisiensi Waktu Rekap" : "Recapitulation Time Saved",
      m1Desc: lang === "id"
        ? "Memangkas waktu pencatatan dan rekapitulasi pelanggaran dari hitungan jam menjadi hitungan menit dibanding cara manual."
        : "Reduced monthly record keeping and re-tallying time from hours to minutes compared to manual paper logs.",
      m2Title: lang === "id" ? "Akurasi Kalkulasi Poin" : "Point Calculation Accuracy",
      m2Desc: lang === "id"
        ? "Meminimalisir kesalahan perhitungan poin kumulatif dan kepastian transparansi penentuan sanksi kedisiplinan siswa."
        : "Eliminated human calculation errors in cumulative points, guaranteeing transparent discipline enforcement.",
      m3Title: lang === "id" ? "Digitalisasi Workflow" : "Digital Workflow Parity",
      m3Desc: lang === "id"
        ? "Transformasi total alur kerja penanganan disiplin siswa di lingkungan sekolah berbasis paperless & cloud-ready."
        : "Complete end-to-end paperless transformation of student discipline management in school environments.",
    },
    screenshots: {
      tag: "Visual Showcase",
      title: lang === "id" ? "Tampilan Antarmuka Utama Aplikasi" : "Primary Application UI Showcase",
      sub: lang === "id"
        ? "Pilih tab di bawah untuk melihat preview antarmuka utama APELSI."
        : "Select a tab below to inspect APELSI's primary UI interfaces.",
      btnApp: lang === "id" ? "Uji di Aplikasi Live" : "Test in Live App",
    },
    contact: {
      tag: lang === "id" ? "7. Hubungi & Kolaborasi" : "7. Contact & Collaboration",
      title: lang === "id" ? "Tertarik Berkolaborasi atau Mendiskusikan Project?" : "Interested in Working Together or Discussing Architecture?",
      sub: lang === "id"
        ? "Apakah Anda mencari Full-Stack & DevOps Engineer untuk tim Anda, atau berminat mendiskusikan arsitektur aplikasi APELSI? Silakan hubungi saya melalui saluran di bawah."
        : "Looking for a Full-Stack & DevOps Engineer for your engineering team, or interested in discussing APELSI's system design? Reach out to me directly below.",
      btnEmail: lang === "id" ? "Kirim Email Langsung" : "Send Direct Email",
      btnWhatsapp: lang === "id" ? "Hubungi via WhatsApp" : "Chat on WhatsApp",
      btnLinkedin: lang === "id" ? "Profil LinkedIn" : "LinkedIn Profile",
    },
    footer: {
      title: "APELSI - Dedicated Technical Portfolio Showcase",
      sub: lang === "id"
        ? "Dirancang dan dikembangkan sebagai portofolio teknis Full-Stack & DevOps Engineering untuk menunjukkan problem-solving, arsitektur sistem, dan dampak nyata aplikasi."
        : "Designed and engineered as a technical Full-Stack & DevOps portfolio to demonstrate problem-solving, system architecture, and real-world impact.",
      btnLaunch: lang === "id" ? "Buka Akun & Link Demo Aplikasi" : "Get Demo Credentials & App Link",
    },
  };

  const screenshotList = [
    {
      id: "dashboard",
      title: lang === "id" ? "Dashboard Analytics" : "Analytics Dashboard",
      file: "/screenshots/dashboard-overview.png",
      description: lang === "id"
        ? "Visualisasi statistik pelanggaran, poin kumulatif, dan tren grafik kedisiplinan siswa secara real-time."
        : "Real-time visualization of violation statistics, cumulative points, and student discipline trend charts.",
      badge: "Analytics & Monitoring",
    },
    {
      id: "violation-entry",
      title: "Quick Violation Entry",
      file: "/screenshots/violation-entry.jpg",
      description: lang === "id"
        ? "Form input pencatatan pelanggaran oleh guru lengkap dengan kategori, bobot poin, dan foto bukti ke MinIO."
        : "Duty teacher violation entry form featuring automated point calculation and MinIO photo uploads.",
      badge: lang === "id" ? "Pencatatan Cepat" : "Fast Entry",
    },
    {
      id: "student-history",
      title: lang === "id" ? "Riwayat & Poin Siswa" : "Student Points History",
      file: "/screenshots/student-history.png",
      description: lang === "id"
        ? "Rekam jejak akumulasi poin pelanggaran dan riwayat sanksi siswa didukung Redis caching."
        : "Centralized tracking ledger for student accumulated violation points cached via Redis.",
      badge: "History Tracking",
    },
    {
      id: "report-export",
      title: lang === "id" ? "Ekspor Laporan PDF/Excel" : "PDF/Excel Report Export",
      file: "/screenshots/report-export.png",
      description: lang === "id"
        ? "Fitur rekapitulasi data otomatis dalam format PDF dan Excel untuk rapat evaluasi."
        : "Automated data summary generation in PDF and Excel (.xlsx) formats for evaluation meetings.",
      badge: "Reporting & Export",
    },
    {
      id: "rbac-management",
      title: "RBAC & User Management",
      file: "/screenshots/rbac-management.png",
      description: lang === "id"
        ? "Otorisasi pengguna 2-role bertingkat untuk Guru / BK / Tatib dan Admin Sekolah."
        : "Multi-tier 2-role authorization matrix for Teachers/Counselors and School Admin.",
      badge: "Security & Roles",
    },
  ];

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${isDark
      ? "bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white"
      : "bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white"
      }`}>
      {/* Top Announcement Bar */}
      <div className={`text-xs py-2.5 px-4 text-center border-b flex items-center justify-center gap-2 ${isDark
        ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-slate-200 border-indigo-500/20"
        : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white border-indigo-200"
        }`}>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>{t.topBar}</span>
        <span className="hidden sm:inline-block opacity-60">•</span>
        <span className="hidden sm:inline-block font-mono font-semibold">APELSI Project</span>
      </div>

      {/* Navigation Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 lg:px-8 py-3.5 transition-colors duration-300 ${isDark
        ? "bg-slate-950/85 border-slate-800/80"
        : "bg-white/85 border-slate-200/80 shadow-sm"
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/25">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`font-bold text-base tracking-tight block leading-none ${isDark ? "text-white" : "text-slate-900"}`}>
                APELSI
              </span>
              <span className={`text-[10px] tracking-wider uppercase font-semibold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {lang === "id" ? "Portofolio Teknis" : "Technical Portfolio"}
              </span>
            </div>
          </div>

          {/* Compact Navbar List */}
          <nav className={`hidden lg:flex items-center gap-5 text-[11px] font-medium tracking-tight sm:tracking-normal uppercase ${isDark ? "text-slate-400" : "text-slate-600"
            }`}>
            <a href="#elevator-pitch" className="hover:text-indigo-500 transition-colors">{t.nav.overview}</a>
            <a href="#problems" className="hover:text-indigo-500 transition-colors">{t.nav.problems}</a>
            <a href="#features" className="hover:text-indigo-500 transition-colors">{t.nav.features}</a>
            <a href="#tech-stack" className="hover:text-indigo-500 transition-colors">{t.nav.architecture}</a>
            <a href="#engineering" className="hover:text-indigo-500 transition-colors">{t.nav.engineering}</a>
            <a href="#impact" className="hover:text-indigo-500 transition-colors">{t.nav.impact}</a>
            <a href="#screenshots" className="hover:text-indigo-500 transition-colors">{t.nav.screenshots}</a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Theme Switcher Toggle (Sun / Moon) */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`p-2 rounded-xl border transition-all ${isDark
                ? "bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800"
                : "bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200"
                }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Switcher Pill */}
            <div className={`p-1 rounded-xl border flex items-center text-xs ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-100 border-slate-200"
              }`}>
              <button
                onClick={() => setLang("id")}
                className={`px-2 py-0.5 rounded-lg font-medium text-[11px] transition-all ${lang === "id" ? "bg-indigo-600 text-white shadow-sm font-bold" : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                🇮🇩 ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-lg font-medium text-[11px] transition-all ${lang === "en" ? "bg-indigo-600 text-white shadow-sm font-bold" : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 1. HERO / ELEVATOR PITCH SECTION */}
      <section id="elevator-pitch" className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background glow graphics */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none ${isDark ? "bg-indigo-600/15" : "bg-indigo-300/30"
          }`} />
        <div className={`absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none ${isDark ? "bg-purple-600/15" : "bg-purple-300/30"
          }`} />

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          {/* Role pill & tags */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium mb-8 backdrop-blur-md ${isDark
            ? "bg-indigo-950/80 border-indigo-500/30 text-indigo-300"
            : "bg-indigo-50 border-indigo-200 text-indigo-800"
            }`}>
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>Role: <strong>{t.hero.role}</strong></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] ${isDark ? "text-white" : "text-slate-900"
            }`}>
            {t.hero.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.hero.abbreviation}
            </span>
          </h1>

          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal ${isDark ? "text-slate-300" : "text-slate-600"
            }`}>
            {t.hero.sub}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
            {[
              "Next.js 15",
              "NestJS REST API",
              "PostgreSQL",
              "MinIO S3 Storage",
              "Redis Cache",
              "Docker Container",
              "Nginx Reverse Proxy",
              "JWT + RBAC",
              "CI/CD Pipeline",
            ].map((tech) => (
              <Badge
                key={tech}
                className={`text-xs py-1 px-3 border transition-colors ${isDark
                  ? "bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-800"
                  : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-sm"
                  }`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 py-6 rounded-2xl shadow-xl shadow-indigo-600/30 text-base transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {t.hero.btnDemo}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION SECTION */}
      <section id="problems" className={`py-20 border-y relative ${isDark ? "bg-slate-900/50 border-slate-800/80" : "bg-slate-100/70 border-slate-200"
        }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-500 mb-2">{t.problems.tag}</h2>
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t.problems.title}</h3>
            <p className={`text-sm sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.problems.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className={`p-8 rounded-3xl border shadow-xl relative overflow-hidden ${isDark ? "bg-slate-900/90 border-red-500/20" : "bg-white border-red-200"
              }`}>
              <div className="absolute top-0 right-0 p-4 bg-red-500/10 rounded-bl-2xl border-l border-b border-red-500/20 text-red-500 font-mono text-xs font-semibold">
                {t.problems.beforeTag}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-500">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h4 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t.problems.beforeTitle}</h4>
              </div>
              <ul className="space-y-4">
                <li className={`flex items-start gap-3 p-4 rounded-2xl border ${isDark ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                  <div>
                    <strong className={`block text-sm mb-0.5 ${isDark ? "text-slate-200" : "text-slate-900"}`}>{t.problems.p1Title}</strong>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {t.problems.p1Desc}
                    </p>
                  </div>
                </li>
                <li className={`flex items-start gap-3 p-4 rounded-2xl border ${isDark ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                  <div>
                    <strong className={`block text-sm mb-0.5 ${isDark ? "text-slate-200" : "text-slate-900"}`}>{t.problems.p2Title}</strong>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {t.problems.p2Desc}
                    </p>
                  </div>
                </li>
                <li className={`flex items-start gap-3 p-4 rounded-2xl border ${isDark ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                  <div>
                    <strong className={`block text-sm mb-0.5 ${isDark ? "text-slate-200" : "text-slate-900"}`}>{t.problems.p3Title}</strong>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {t.problems.p3Desc}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className={`p-8 rounded-3xl border shadow-xl relative overflow-hidden ${isDark ? "bg-slate-900/90 border-emerald-500/20" : "bg-white border-emerald-200"
              }`}>
              <div className="absolute top-0 right-0 p-4 bg-emerald-500/10 rounded-bl-2xl border-l border-b border-emerald-500/20 text-emerald-500 font-mono text-xs font-semibold">
                {t.problems.afterTag}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t.problems.afterTitle}</h4>
              </div>
              <ul className="space-y-4">
                <li className={`flex items-start gap-3 p-4 rounded-2xl border ${isDark ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className={`block text-sm mb-0.5 ${isDark ? "text-slate-200" : "text-slate-900"}`}>{t.problems.s1Title}</strong>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {t.problems.s1Desc}
                    </p>
                  </div>
                </li>
                <li className={`flex items-start gap-3 p-4 rounded-2xl border ${isDark ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className={`block text-sm mb-0.5 ${isDark ? "text-slate-200" : "text-slate-900"}`}>{t.problems.s2Title}</strong>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {t.problems.s2Desc}
                    </p>
                  </div>
                </li>
                <li className={`flex items-start gap-3 p-4 rounded-2xl border ${isDark ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className={`block text-sm mb-0.5 ${isDark ? "text-slate-200" : "text-slate-900"}`}>{t.problems.s3Title}</strong>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {t.problems.s3Desc}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES SECTION */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-500 mb-2">{t.features.tag}</h2>
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t.features.title}</h3>
            <p className={`text-sm sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.features.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className={`transition-all duration-300 hover:-translate-y-1 ${isDark
              ? "bg-slate-900/80 border-slate-800 hover:border-indigo-500/50"
              : "bg-white border-slate-200 shadow-md hover:border-indigo-400"
              }`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.features.f1Title}</h4>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {t.features.f1Desc}
                </p>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-[11px] font-medium text-blue-500 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>{t.features.tryApp}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:-translate-y-1 ${isDark
              ? "bg-slate-900/80 border-slate-800 hover:border-purple-500/50"
              : "bg-white border-slate-200 shadow-md hover:border-purple-400"
              }`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.features.f2Title}</h4>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {t.features.f2Desc}
                </p>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-[11px] font-medium text-purple-500 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>{t.features.tryApp}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:-translate-y-1 ${isDark
              ? "bg-slate-900/80 border-slate-800 hover:border-emerald-500/50"
              : "bg-white border-slate-200 shadow-md hover:border-emerald-400"
              }`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.features.f3Title}</h4>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {t.features.f3Desc}
                </p>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-[11px] font-medium text-emerald-500 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>{t.features.tryApp}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:-translate-y-1 ${isDark
              ? "bg-slate-900/80 border-slate-800 hover:border-amber-500/50"
              : "bg-white border-slate-200 shadow-md hover:border-amber-400"
              }`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.features.f4Title}</h4>
                <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {t.features.f4Desc}
                </p>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-[11px] font-medium text-amber-500 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>{t.features.tryApp}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK & SYSTEM ARCHITECTURE */}
      <section id="tech-stack" className={`py-20 border-y ${isDark ? "bg-slate-900/60 border-slate-800/80" : "bg-slate-100/70 border-slate-200"
        }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-500 mb-2">{t.techStack.tag}</h2>
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t.techStack.title}</h3>
            <p className={`text-sm sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.techStack.sub}
            </p>
          </div>

          {/* Tech Stack Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className={`p-6 rounded-2xl border ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
              <div className="flex items-center gap-2 mb-4 text-indigo-500 text-sm font-semibold">
                <Code2 className="w-4 h-4" />
                <span>Frontend</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Next.js 15</span>
                  <span className="text-slate-500 font-mono">App Router</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>React 19 & TS</span>
                  <span className="text-slate-500 font-mono">UI Logic</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Tailwind CSS</span>
                  <span className="text-slate-500 font-mono">Styling</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
              <div className="flex items-center gap-2 mb-4 text-purple-500 text-sm font-semibold">
                <Server className="w-4 h-4" />
                <span>Backend API</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>NestJS / REST</span>
                  <span className="text-slate-500 font-mono">API Engine</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>JWT Auth</span>
                  <span className="text-slate-500 font-mono">Security</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Redis Caching</span>
                  <span className="text-slate-500 font-mono">In-Memory Cache</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
              <div className="flex items-center gap-2 mb-4 text-emerald-500 text-sm font-semibold">
                <Database className="w-4 h-4" />
                <span>DB & Object Storage</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>PostgreSQL</span>
                  <span className="text-slate-500 font-mono">Relational DB</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>MinIO S3</span>
                  <span className="text-slate-500 font-mono">Cloud Storage</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Redis Cache</span>
                  <span className="text-slate-500 font-mono">Rate Limiting</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
              <div className="flex items-center gap-2 mb-4 text-amber-500 text-sm font-semibold">
                <Container className="w-4 h-4" />
                <span>DevOps & Infra</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Docker</span>
                  <span className="text-slate-500 font-mono">Containers</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 border-b ${isDark ? "border-slate-800/60 text-slate-300" : "border-slate-100 text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Nginx</span>
                  <span className="text-slate-500 font-mono">Reverse Proxy</span>
                </li>
                <li className={`flex items-center justify-between py-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <span className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>CI/CD Pipeline</span>
                  <span className="text-slate-500 font-mono">Auto Deploy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Architecture Flow Diagram */}
          <div className={`p-8 rounded-3xl border relative overflow-hidden ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200 shadow-md"
            }`}>
            <h4 className="text-sm font-mono text-indigo-500 uppercase tracking-widest mb-6 text-center">
              {t.techStack.archTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
              <div className={`p-4 rounded-xl border text-center ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                <Users className="w-5 h-5 mx-auto mb-2 text-indigo-500" />
                <span className={`font-bold block ${isDark ? "text-white" : "text-slate-900"}`}>Client Browsers</span>
                <span className="text-[10px] text-slate-500">Guru / BK / Admin</span>
              </div>

              <div className={`p-4 rounded-xl border text-center ${isDark ? "bg-indigo-950/60 border-indigo-500/30 text-indigo-300" : "bg-indigo-50 border-indigo-200 text-indigo-900"
                }`}>
                <Server className="w-5 h-5 mx-auto mb-2 text-purple-500" />
                <span className="font-bold block">Nginx Reverse Proxy</span>
                <span className="text-[10px] opacity-75">Port 80 / 443 SSL</span>
              </div>

              <div className={`p-4 rounded-xl border text-center ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                <Container className="w-5 h-5 mx-auto mb-2 text-emerald-500" />
                <span className={`font-bold block ${isDark ? "text-white" : "text-slate-900"}`}>Docker App Containers</span>
                <span className="text-[10px] text-slate-500">Next.js FE + NestJS BE</span>
              </div>

              <div className={`p-4 rounded-xl border text-center ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                <Zap className="w-5 h-5 mx-auto mb-2 text-red-500" />
                <span className={`font-bold block ${isDark ? "text-white" : "text-slate-900"}`}>Redis Caching</span>
                <span className="text-[10px] text-slate-500">In-Memory Store</span>
              </div>

              <div className={`p-4 rounded-xl border text-center ${isDark ? "bg-slate-900 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                <HardDrive className="w-5 h-5 mx-auto mb-2 text-amber-500" />
                <span className={`font-bold block ${isDark ? "text-white" : "text-slate-900"}`}>PostgreSQL & MinIO</span>
                <span className="text-[10px] text-slate-500">Relational DB & S3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENGINEERING HIGHLIGHTS SECTION */}
      <section id="engineering" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-500 mb-2">{t.engineering.tag}</h2>
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t.engineering.title}</h3>
            <p className={`text-sm sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.engineering.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-3xl border transition-all ${isDark ? "bg-slate-900/90 border-slate-800 hover:border-indigo-500/50" : "bg-white border-slate-200 shadow-md hover:border-indigo-300"
              }`}>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.engineering.e1Title}</h4>
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.engineering.e1Desc}
              </p>
              <div className={`p-3 rounded-xl text-[11px] font-mono border ${isDark ? "bg-slate-950 text-indigo-300 border-slate-800" : "bg-indigo-50 text-indigo-900 border-indigo-200"
                }`}>
                {t.engineering.e1Res}
              </div>
            </div>

            <div className={`p-6 rounded-3xl border transition-all ${isDark ? "bg-slate-900/90 border-slate-800 hover:border-purple-500/50" : "bg-white border-slate-200 shadow-md hover:border-purple-300"
              }`}>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.engineering.e2Title}</h4>
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.engineering.e2Desc}
              </p>
              <div className={`p-3 rounded-xl text-[11px] font-mono border ${isDark ? "bg-slate-950 text-purple-300 border-slate-800" : "bg-purple-50 text-purple-900 border-purple-200"
                }`}>
                {t.engineering.e2Res}
              </div>
            </div>

            <div className={`p-6 rounded-3xl border transition-all ${isDark ? "bg-slate-900/90 border-slate-800 hover:border-emerald-500/50" : "bg-white border-slate-200 shadow-md hover:border-emerald-300"
              }`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.engineering.e3Title}</h4>
              <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.engineering.e3Desc}
              </p>
              <div className={`p-3 rounded-xl text-[11px] font-mono border ${isDark ? "bg-slate-950 text-emerald-300 border-slate-800" : "bg-emerald-50 text-emerald-900 border-emerald-200"
                }`}>
                {t.engineering.e3Res}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACT & RESULTS SECTION */}
      <section id="impact" className={`py-20 border-t ${isDark ? "bg-slate-900/40 border-slate-800/80" : "bg-slate-100/70 border-slate-200"
        }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-500 mb-2">{t.impact.tag}</h2>
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t.impact.title}</h3>
            <p className={`text-sm sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.impact.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className={`p-8 rounded-3xl border text-center relative overflow-hidden ${isDark
              ? "bg-gradient-to-b from-indigo-950/40 to-slate-900 border-indigo-500/20"
              : "bg-white border-indigo-200 shadow-md"
              }`}>
              <div className="text-5xl lg:text-6xl font-black text-indigo-500 tracking-tight mb-2">70%</div>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.impact.m1Title}</h4>
              <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.impact.m1Desc}
              </p>
            </div>

            <div className={`p-8 rounded-3xl border text-center relative overflow-hidden ${isDark
              ? "bg-gradient-to-b from-purple-950/40 to-slate-900 border-purple-500/20"
              : "bg-white border-purple-200 shadow-md"
              }`}>
              <div className="text-5xl lg:text-6xl font-black text-purple-500 tracking-tight mb-2">100%</div>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.impact.m2Title}</h4>
              <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.impact.m2Desc}
              </p>
            </div>

            <div className={`p-8 rounded-3xl border text-center relative overflow-hidden ${isDark
              ? "bg-gradient-to-b from-emerald-950/40 to-slate-900 border-emerald-500/20"
              : "bg-white border-emerald-200 shadow-md"
              }`}>
              <div className="text-5xl lg:text-6xl font-black text-emerald-500 tracking-tight mb-2">100%</div>
              <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.impact.m3Title}</h4>
              <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.impact.m3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SCREENSHOTS / VISUAL DEMO GALLERY */}
      <section id="screenshots" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-500 mb-2">{t.screenshots.tag}</h2>
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t.screenshots.title}</h3>
            <p className={`text-sm sm:text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t.screenshots.sub}
            </p>
          </div>

          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {screenshotList.map((item, idx) => (
              <Button
                key={item.id}
                onClick={() => setActiveScreenshot(idx)}
                variant={activeScreenshot === idx ? "default" : "outline"}
                className={`text-xs rounded-xl px-4 py-2 font-medium transition-all ${activeScreenshot === idx
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                  : isDark ? "border-slate-800 bg-slate-950 text-slate-400 hover:text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {item.title}
              </Button>
            ))}
          </div>

          {/* Active screenshot display area */}
          <div className={`max-w-4xl mx-auto rounded-3xl border overflow-hidden shadow-2xl p-4 sm:p-6 ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
            }`}>
            <div className={`flex items-center justify-between mb-4 pb-3 border-b text-xs ${isDark ? "border-slate-800/80" : "border-slate-200"
              }`}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="font-mono text-slate-500 ml-2">apelsi.school.id/{screenshotList[activeScreenshot].id}</span>
              </div>
              <Badge className="bg-indigo-950 text-indigo-300 border-indigo-800 text-[10px]">
                {screenshotList[activeScreenshot].badge}
              </Badge>
            </div>

            {/* Image display or visual component fallback */}
            <div className={`relative aspect-video rounded-xl overflow-hidden flex items-center justify-center border group ${isDark ? "bg-slate-900 border-slate-800/60" : "bg-slate-100 border-slate-200"
              }`}>
              <img
                src={screenshotList[activeScreenshot].file}
                alt={screenshotList[activeScreenshot].title}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallbackDiv = e.currentTarget.parentElement?.querySelector(".fallback-ui");
                  if (fallbackDiv) (fallbackDiv as HTMLElement).style.display = "flex";
                }}
              />

              <div className={`fallback-ui hidden absolute inset-0 flex-col items-center justify-center p-8 text-center ${isDark
                ? "bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950"
                : "bg-gradient-to-br from-slate-100 via-indigo-50/50 to-slate-200"
                }`}>
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-500 mb-4">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h4 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{screenshotList[activeScreenshot].title}</h4>
                <p className={`text-xs max-w-md leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {screenshotList[activeScreenshot].description}
                </p>
                <div className="text-[11px] text-amber-500 font-mono bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
                  Place screenshot file at: <code className="font-bold">{screenshotList[activeScreenshot].file}</code>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-500 flex items-center justify-between">
              <span>{screenshotList[activeScreenshot].description}</span>
              <Button
                size="sm"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded-lg py-1 px-3"
              >
                {t.screenshots.btnApp}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION & CONTACT SECTION */}
      <section id="contact" className={`py-20 border-t relative overflow-hidden ${isDark ? "bg-slate-900/80 border-slate-800" : "bg-gradient-to-b from-slate-100 to-indigo-50/40 border-slate-200"
        }`}>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium mb-6 ${isDark ? "bg-indigo-950/80 border-indigo-500/30 text-indigo-300" : "bg-indigo-100 border-indigo-200 text-indigo-800"
            }`}>
            <Mail className="w-3.5 h-3.5 text-indigo-500" />
            <span>{t.contact.tag}</span>
          </div>

          <h3 className={`text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight ${isDark ? "text-white" : "text-slate-900"
            }`}>
            {t.contact.title}
          </h3>

          <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10 ${isDark ? "text-slate-300" : "text-slate-600"
            }`}>
            {t.contact.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${contactEmail}`}>
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-7 py-6 rounded-2xl shadow-lg shadow-indigo-500/25 text-sm flex items-center gap-2 transition-all hover:scale-105">
                <Mail className="w-4 h-4" />
                <span>{t.contact.btnEmail}</span>
              </Button>
            </a>

            <a href={contactWhatsapp} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-6 rounded-2xl shadow-lg shadow-emerald-600/25 text-sm flex items-center gap-2 transition-all hover:scale-105">
                <SiWhatsapp className="w-4 h-4" />
                <span>{t.contact.btnWhatsapp}</span>
              </Button>
            </a>

            <a href={contactLinkedin} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className={`font-bold px-7 py-6 rounded-2xl text-sm border flex items-center gap-2 transition-all hover:scale-105 ${isDark
                ? "border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
                : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100 shadow-sm"
                }`}>
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>{t.contact.btnLinkedin}</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER & CTA */}
      <footer className={`py-16 border-t text-xs ${isDark ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
        }`}>
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <div className={`flex items-center justify-center gap-2 font-bold text-lg ${isDark ? "text-white" : "text-slate-900"}`}>
            <GraduationCap className="w-6 h-6 text-indigo-500" />
            <span>{t.footer.title}</span>
          </div>

          <p className="max-w-xl mx-auto leading-relaxed opacity-80">
            {t.footer.sub}
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-6 py-2.5 rounded-xl"
            >
              <ExternalLink className="w-4 h-4 mr-1.5" />
              {t.footer.btnLaunch}
            </Button>
          </div>

          <div className="pt-8 border-t border-slate-800/50 opacity-60 font-mono text-[11px]">
            © {new Date().getFullYear()} APELSI Portfolio • Direct Live Demo Application Link
          </div>
        </div>
      </footer>

      {/* Live Demo Link & Credentials Modal */}
      <DemoCredentialsModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        lang={lang}
      />

      {/* FLOATING CALL TO ACTION BAR */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5">
        {/* Floating WhatsApp Action */}
        <a
          href={contactWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 transform hover:scale-110"
          title={lang === "id" ? "Hubungi via WhatsApp" : "Chat on WhatsApp"}
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full animate-pulse" />
          <SiWhatsapp className="w-5 h-5" />
          <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            {lang === "id" ? "Chat WhatsApp" : "WhatsApp Chat"}
          </span>
        </a>

        {/* Floating Demo App Launcher */}
        <Button
          onClick={() => setIsDemoModalOpen(true)}
          className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-full shadow-2xl shadow-indigo-600/40 border border-indigo-400/30 flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
        >
          <ExternalLink className="w-4 h-4 animate-bounce" />
          <span>{lang === "id" ? "Coba Demo Live" : "Try Live Demo"}</span>
        </Button>
      </div>
    </div>
  );
}
