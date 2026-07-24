"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react";

interface DemoCredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: "id" | "en";
}

export function DemoCredentialsModal({ isOpen, onClose, lang = "id" }: DemoCredentialsModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Base Live App URL (configurable via env variable or default)
  const baseUrl = process.env.NEXT_PUBLIC_DEMO_URL || "https://pelanggaran-saas.indranurwahid.my.id/login/sekolah-demo";

  const credentials = [
    {
      id: "admin",
      role: lang === "id" ? "Admin Sekolah" : "School Administrator",
      badge: "Full Control & Master Data",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      color: "from-amber-500/10 to-orange-500/10 border-amber-200 text-amber-900",
      icon: ShieldCheck,
      username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admindemo",
      password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admindemo123",
      note: lang === "id"
        ? "Akses penuh memasukkan siswa, kelas, jenis pelanggaran, & laporan."
        : "Full access to add students, classes, violation types & reports.",
    },
    {
      id: "guru",
      role: lang === "id" ? "Guru (BK / Tatib)" : "Teacher (BK / Discipline)",
      badge: "Dashboard & Input Data",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      color: "from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-900",
      icon: UserCheck,
      username: process.env.NEXT_PUBLIC_USER_USERNAME || "gurudemo",
      password: process.env.NEXT_PUBLIC_USER_PASSWORD || "gurudemo123",
      note: lang === "id"
        ? "Akses input data pelanggaran siswa & memantau dashboard poin."
        : "Access to enter student violation records & view point dashboard.",
    },
  ];

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Helper to append URL query params cleanly
  const getAppUrlWithParams = (username: string, pass: string, role: string) => {
    const url = new URL(baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`);
    url.searchParams.set("username", username);
    url.searchParams.set("password", pass);
    url.searchParams.set("role", role);
    return url.toString();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl border-0 shadow-2xl bg-white text-slate-900">
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2 text-indigo-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{lang === "id" ? "Akses Live Demo Aplikasi" : "Live Application Demo Access"}</span>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {lang === "id" ? "Pilih Akun Demo Aplikasi APELSI" : "Select APELSI Demo Account"}
            </DialogTitle>
            <DialogDescription className="text-slate-300 text-xs sm:text-sm">
              {lang === "id"
                ? "Klik tombol pada role yang diinginkan untuk membuka aplikasi dengan username & password di URL param secara otomatis."
                : "Click the role button below to open the application pre-filled with username & password in URL query params."}
            </DialogDescription>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 bg-slate-50 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Credentials Cards with direct URL param links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {credentials.map((acc) => {
              const IconComp = acc.icon;
              const directParamUrl = getAppUrlWithParams(acc.username, acc.password, acc.id);

              return (
                <div
                  key={acc.id}
                  className={`rounded-2xl border p-5 bg-gradient-to-b ${acc.color} flex flex-col justify-between space-y-4 shadow-sm`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-100">
                          <IconComp className="w-5 h-5 text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-base">{acc.role}</h4>
                      </div>
                      <Badge className={`text-[10px] font-semibold ${acc.badgeColor} border`}>
                        {acc.id.toUpperCase()}
                      </Badge>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{acc.note}</p>

                    <div className="p-3 rounded-xl bg-white/90 border border-slate-200 text-xs space-y-2 font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Username:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900">{acc.username}</span>
                          <button
                            onClick={() => copyToClipboard(acc.username, `user_${acc.id}`)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-500"
                            title="Copy Username"
                          >
                            {copiedKey === `user_${acc.id}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Password:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900">{acc.password}</span>
                          <button
                            onClick={() => copyToClipboard(acc.password, `pass_${acc.id}`)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-500"
                            title="Copy Password"
                          >
                            {copiedKey === `pass_${acc.id}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Launch Button with URL Query Params */}
                  <a href={directParamUrl} target="_blank" rel="noopener noreferrer" className="block pt-2">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all">
                      <span>{lang === "id" ? `Masuk sebagai ${acc.id === "admin" ? "Admin" : "Guru"}` : `Login as ${acc.id === "admin" ? "Admin" : "Teacher"}`}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span className="font-mono text-[11px]">URL Param: ?username=...&password=...&role=...</span>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-600 hover:text-slate-900">
            {lang === "id" ? "Tutup" : "Close"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
