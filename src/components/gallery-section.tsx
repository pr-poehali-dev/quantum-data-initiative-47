import { useState } from "react"
import Icon from "@/components/ui/icon"

const photos = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/projects/56325266-f3fd-4bad-a21d-e809574bbae6/files/9d664cf6-0a0f-4d35-b947-fbff57c6f2d7.jpg",
    label: "Oversized Hoodie",
    tall: true,
  },
  {
    id: 2,
    url: "https://cdn.poehali.dev/projects/56325266-f3fd-4bad-a21d-e809574bbae6/files/b1757614-ad86-4600-93c2-b7975fd28689.jpg",
    label: "Crewneck Drop",
    tall: false,
  },
  {
    id: 3,
    url: "https://cdn.poehali.dev/projects/56325266-f3fd-4bad-a21d-e809574bbae6/files/33c2c738-1520-4ab1-a5ca-4a53b9c0b855.jpg",
    label: "Fabric Detail",
    tall: false,
  },
  {
    id: 4,
    url: "https://cdn.poehali.dev/projects/56325266-f3fd-4bad-a21d-e809574bbae6/files/395dd48b-9a49-45ca-a326-d8df86a23cc7.jpg",
    label: "Night Session",
    tall: true,
  },
  {
    id: 5,
    url: "https://cdn.poehali.dev/projects/56325266-f3fd-4bad-a21d-e809574bbae6/files/0271a93c-4885-4e6e-b2ec-68320ce5bf43.jpg",
    label: "Graphic Tee",
    tall: false,
  },
  {
    id: 6,
    url: "https://cdn.poehali.dev/projects/56325266-f3fd-4bad-a21d-e809574bbae6/files/e584b0c6-1a39-412d-ae67-8ae5ac630e24.jpg",
    label: "Knit Collection",
    tall: false,
  },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const current = photos.find((p) => p.id === lightbox)

  const prev = () => {
    if (lightbox === null) return
    const idx = photos.findIndex((p) => p.id === lightbox)
    setLightbox(photos[(idx - 1 + photos.length) % photos.length].id)
  }

  const next = () => {
    if (lightbox === null) return
    const idx = photos.findIndex((p) => p.id === lightbox)
    setLightbox(photos[(idx + 1) % photos.length].id)
  }

  return (
    <section id="gallery" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-red-500 font-geist text-sm tracking-[0.3em] uppercase mb-4">Визуал</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Галерея
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-md mx-auto">
            Образы. Текстуры. Атмосфера.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300"
              onClick={() => setLightbox(photo.id)}
            >
              <img
                src={photo.url}
                alt={photo.label}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  photo.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-orbitron text-white text-sm tracking-widest uppercase flex items-center gap-2">
                    <Icon name="Expand" size={14} className="text-red-500" />
                    {photo.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://instagram.com/meraunCLO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-white/10 hover:border-red-500/50 text-gray-300 hover:text-white font-orbitron text-xs tracking-widest uppercase transition-all duration-200 rounded-lg"
          >
            <Icon name="Instagram" size={16} className="text-red-500" />
            Больше в Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && current && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={28} />
          </button>

          <button
            className="absolute left-4 text-white/50 hover:text-white transition-colors p-3"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <Icon name="ChevronLeft" size={32} />
          </button>

          <img
            src={current.url}
            alt={current.label}
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white/50 hover:text-white transition-colors p-3"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <Icon name="ChevronRight" size={32} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <span className="font-orbitron text-white/40 text-xs tracking-widest uppercase">{current.label}</span>
          </div>
        </div>
      )}
    </section>
  )
}
