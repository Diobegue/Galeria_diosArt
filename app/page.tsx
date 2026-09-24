import Gallery from "@/components/Gallery";
import BackToTop from "@/components/BackToTop";
import { paintings } from "@/data/paintings";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20 lg:px-10">
      <header className="mb-14 max-w-2xl sm:mb-20">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-moss-400">
          Coleção aberta
        </p>
        <h1 className="mt-4 font-display text-4xl italic leading-[1.1] text-linen-100 sm:text-5xl lg:text-6xl">
          Galeria Desenhos 
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-linen-500 sm:text-base">
          Uma seleção de imagens de acesso público, reunidas em um mural de
          proporções livres sob a luz do verde-musgo contra o breu.
        </p>
      </header>

      <Gallery paintings={paintings} />

      <BackToTop />

      <footer className="mt-24 overflow-hidden rounded-xl border border-moss-700/30 bg-ink-900 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)]">
        <div className="grid gap-8 px-6 py-9 sm:grid-cols-[1.3fr_1fr] sm:px-9 sm:py-11">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-moss-500/50 bg-moss-950 text-moss-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 18.5 9 12l3.5 3.5 2.5-2.5 5.5 5.5M6.5 8.5h.01" />
                  <path strokeLinecap="round" d="M3.5 4.5h17v15h-17z" />
                </svg>
              </span>
              <p className="font-display text-lg italic text-linen-100">Galeria DiosArts</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-linen-500">
              Um mural visual de paisagens, texturas e lugares para explorar sem pressa.
            </p>
          </div>

          <div className="sm:justify-self-end">
            <p className="font-display text-[11px] uppercase tracking-[0.22em] text-moss-400">Acervo</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-linen-500">
              Fotografias de acesso público selecionadas no Unsplash.
            </p>
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-linen-300 transition-colors hover:text-moss-300"
            >
              Ver fonte das imagens <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-moss-700/30 px-6 py-4 sm:px-9">
          <p className="text-[11px] uppercase tracking-[0.16em] text-linen-500">
            © {new Date().getFullYear()} Galeria DiosArts
          </p>
          <nav aria-label="Redes sociais" className="flex items-center gap-2">
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-moss-700/50 text-linen-400 transition-colors hover:border-moss-400 hover:bg-moss-950 hover:text-moss-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.43 1.27 4.87L2 22l5.27-1.3A9.95 9.95 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.13.77.8-3.04-.2-.31A8.15 8.15 0 1 1 12.04 20.18Zm4.47-6.11c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-1.5-.75-2.49-1.34-3.48-3.04-.26-.45.26-.42.75-1.4.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.81 2.76 4.38 3.87.61.26 1.09.42 1.47.54.62.2 1.18.17 1.63.1.5-.08 1.47-.6 1.68-1.19.21-.59.21-1.09.15-1.19-.06-.11-.23-.17-.48-.3Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-moss-700/50 text-linen-400 transition-colors hover:border-moss-400 hover:bg-moss-950 hover:text-moss-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.8" r=".8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-moss-700/50 text-linen-400 transition-colors hover:border-moss-400 hover:bg-moss-950 hover:text-moss-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.64 19.32c-.05-1.64-.01-3.61.39-5.31l1.29-5.46s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.53 0 .93-.59 2.31-.9 3.59-.26 1.07.54 1.94 1.6 1.94 1.92 0 3.21-2.46 3.21-5.38 0-2.22-1.5-3.88-4.23-3.88-3.08 0-5 2.3-5 4.87 0 .89.26 1.51.67 1.99.19.22.21.31.14.57l-.19.76c-.06.25-.25.34-.46.25-1.7-.69-2.49-2.54-2.49-4.62 0-3.43 2.89-7.54 8.62-7.54 4.61 0 7.64 3.33 7.64 6.91 0 4.73-2.63 8.26-6.51 8.26-1.3 0-2.53-.7-2.95-1.5l-.8 3.15c-.48 1.74-1.42 3.47-2.28 4.7.75.22 1.54.34 2.36.34A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
