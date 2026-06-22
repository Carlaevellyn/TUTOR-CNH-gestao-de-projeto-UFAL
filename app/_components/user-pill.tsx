"use client";

import Link from "next/link";
import { useAuth } from "./auth-provider";

function getInitials(name?: string | null) {
  if (!name) {
    return "TC";
  }

  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase()).join("") || "TC";
}

export function UserPill() {
  const { usuario } = useAuth();
  const name = usuario?.nome ?? "Aluno Tutor CNH";

  return (
    <Link
      href="/dashboard/perfil"
      className="flex items-center gap-3 self-start rounded-full bg-white px-3 py-2 shadow-[0_10px_24px_rgba(19,32,58,0.08)] transition hover:bg-[#f7f9ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label="Abrir perfil"
    >
      <div className="text-right">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-text-muted">Nível Básico</p>
      </div>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-slate-800 to-slate-500 text-sm font-black text-white">
        {getInitials(name)}
      </div>
    </Link>
  );
}
