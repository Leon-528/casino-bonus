"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

const AGE_GATE_STORAGE_KEY = "leon-528-age-verified";
const LEAVE_URL = "https://www.google.com";

export function AgeGate() {
  const { text } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(AGE_GATE_STORAGE_KEY);
    setMounted(true);
    setIsOpen(stored !== "true");
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, mounted]);

  const handleContinue = () => {
    window.localStorage.setItem(AGE_GATE_STORAGE_KEY, "true");
    setIsOpen(false);
  };

  const handleLeave = () => {
    window.location.assign(LEAVE_URL);
  };

  if (!mounted || !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-slate-950/95 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-300/80 text-4xl font-semibold text-cyan-300">
          {text.ageGate.badge}
        </div>

        <h2 id="age-gate-title" className="text-center text-3xl font-semibold text-slate-50">
          {text.ageGate.title}
        </h2>
        <p className="mt-4 text-center text-base text-slate-300">{text.ageGate.description}</p>

        <div className="mt-8 space-y-3">
          <Button
            type="button"
            onClick={handleContinue}
            className="h-12 w-full rounded-2xl text-base"
          >
            {text.ageGate.continueButton}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleLeave}
            className="h-12 w-full rounded-2xl border-slate-700 bg-transparent text-base text-slate-300 hover:bg-slate-900 hover:text-slate-100"
          >
            {text.ageGate.leaveButton}
          </Button>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          {text.ageGate.legalPrefix}{" "}
          <a
            href={text.ageGate.legalLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-300 hover:text-cyan-200"
          >
            {text.ageGate.legalLinkLabel}
          </a>
        </p>
      </div>
    </div>
  );
}
