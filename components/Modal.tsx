"use client";

import { useEffect, useRef } from "react";
import type { Painting } from "@/data/paintings";

type ModalProps = {
  painting: Painting;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Modal({ painting, onClose, onPrevious, onNext }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Fecha com a tecla ESC (comportamento pensado para desktop)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  // Trava o scroll do body enquanto o modal está aberto
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Fecha ao clicar fora da imagem/card (funciona em desktop e mobile)
  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/90 backdrop-blur-sm animate-fadeIn p-4 sm:p-8"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Fechar imagem"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-moss-500/40 bg-ink-950/80 text-linen-100 transition-colors hover:border-moss-400 hover:text-moss-300 sm:right-7 sm:top-7"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onPrevious}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-moss-500/40 bg-ink-950/80 text-linen-100 transition-colors hover:border-moss-400 hover:text-moss-300 sm:left-7"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14 6-6 6 6 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-moss-500/40 bg-ink-950/80 text-linen-100 transition-colors hover:border-moss-400 hover:text-moss-300 sm:right-7"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10 6 6 6-6 6" />
        </svg>
      </button>

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Imagem ampliada"
        className="flex max-h-[88vh] max-w-5xl justify-center animate-riseIn"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={painting.src}
          alt={painting.title}
          className="max-h-[88vh] w-auto max-w-full rounded-sm object-contain shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]"
        />
      </div>
    </div>
  );
}
