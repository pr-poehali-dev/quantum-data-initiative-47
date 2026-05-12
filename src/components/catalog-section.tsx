import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const categories = ["Вся одежда", "Новинки", "Бестселлеры", "Худи", "Футболки", "Свитеры"]

const products = [
  {
    id: 1,
    name: "Худи Meraun Oversized",
    price: 5900,
    category: ["Худи", "Бестселлеры"],
    badge: "Хит",
    color: "#1a1a1a",
    emoji: "🖤",
  },
  {
    id: 2,
    name: "Футболка Essential Black",
    price: 3200,
    category: ["Футболки", "Новинки"],
    badge: "Новинка",
    color: "#111",
    emoji: "⬛",
  },
  {
    id: 3,
    name: "Свитер Meraun Knit",
    price: 6800,
    category: ["Свитеры", "Новинки"],
    badge: "Новинка",
    color: "#2a2a2a",
    emoji: "🌑",
  },
  {
    id: 4,
    name: "Худи Drop Logo",
    price: 6200,
    category: ["Худи", "Новинки"],
    badge: null,
    color: "#1c1c1c",
    emoji: "🔴",
  },
  {
    id: 5,
    name: "Футболка Graphic Red",
    price: 3500,
    category: ["Футболки", "Бестселлеры"],
    badge: "Хит",
    color: "#111",
    emoji: "🔥",
  },
  {
    id: 6,
    name: "Свитер Heavy Crewneck",
    price: 7200,
    category: ["Свитеры", "Бестселлеры"],
    badge: "Хит",
    color: "#1a1a1a",
    emoji: "🌊",
  },
]

interface CatalogSectionProps {
  onAddToCart?: (product: { id: number; name: string; price: number }) => void
}

export function CatalogSection({ onAddToCart }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Вся одежда")

  const filtered = products.filter(
    (p) => activeCategory === "Вся одежда" || p.category.includes(activeCategory)
  )

  return (
    <section id="catalog" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 tracking-widest uppercase">
            Каталог
          </h2>
          <p className="text-gray-400 text-lg">Выбери своё. Носи с характером.</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-geist font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-transparent text-gray-400 border-white/10 hover:border-red-500/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Product image placeholder */}
              <div className="relative bg-zinc-800 h-64 flex items-center justify-center overflow-hidden">
                <span className="text-7xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 group-hover:scale-110 transform transition-transform">
                  {product.emoji}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-red-500 text-white border-0 text-xs font-bold">
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Product info */}
              <div className="p-5">
                <h3 className="font-orbitron text-white font-semibold text-base mb-1 tracking-wide">
                  {product.name}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.category.map((cat) => (
                    <span key={cat} className="text-xs text-gray-500 font-geist">
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-orbitron text-white text-lg font-bold">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white border-0 gap-2 font-geist"
                    onClick={() => onAddToCart?.({ id: product.id, name: product.name, price: product.price })}
                  >
                    <Icon name="Plus" size={14} />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
