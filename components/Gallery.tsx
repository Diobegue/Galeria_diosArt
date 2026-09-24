"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "@/components/Modal";
import type { Painting } from "@/data/paintings";

function LazyPaintingImage({ painting }: { painting: Painting }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  const placeholderRatio = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  }[painting.orientation];

  return (
    <div ref={containerRef}>
      {isVisible ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={painting.src}
          alt={painting.title}
          className="block h-auto w-full opacity-95 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
        />
      ) : (
        <div
          aria-hidden="true"
          className={`w-full ${placeholderRatio} bg-moss-950/40`}
        />
      )}
    </div>
  );
}

export default function Gallery({ paintings }: { paintings: Painting[] }) {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const selectedIndex = selectedPainting
    ? paintings.findIndex((painting) => painting.id === selectedPainting.id)
    : -1;

  function showPaintingAt(index: number) {
    setSelectedPainting(paintings[index]);
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6">
        {paintings.map((painting, index) => (
          <button
            type="button"
            key={painting.id}
            onClick={() => setSelectedPainting(painting)}
            aria-haspopup="dialog"
            aria-label={`Abrir ${painting.title}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-moss-700/25 bg-ink-900 text-left shadow-[0_10px_28px_-18px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-moss-500/60 hover:shadow-[0_20px_35px_-18px_rgba(0,0,0,0.95)] sm:mb-5 lg:mb-6"
            style={{ animationDelay: `${index * 40}ms` }}
            >
              <LazyPaintingImage painting={painting} />
          </button>
        ))}
      </div>

      {selectedPainting && (
        <Modal
          painting={selectedPainting}
          onClose={() => setSelectedPainting(null)}
          onPrevious={() =>
            showPaintingAt((selectedIndex - 1 + paintings.length) % paintings.length)
          }
          onNext={() => showPaintingAt((selectedIndex + 1) % paintings.length)}
        />
      )}
    </>
  );
}
