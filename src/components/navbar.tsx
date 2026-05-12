import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Icon from "@/components/ui/icon"

const menuItems = [
  { label: "Каталог", href: "#catalog" },
  { label: "Лист ожидания коллекции", href: "#waitlist" },
  { label: "Сертификаты", href: "#certificates" },
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Доставка", href: "#delivery" },
  { label: "Возврат и обмен", href: "#returns" },
  { label: "Документы", href: "#documents" },
  { label: "Реферальная программа", href: "#referral" },
  { label: "Вакансии", href: "#careers" },
]

interface NavbarProps {
  cartCount?: number
  onCartOpen?: () => void
}

export function Navbar({ cartCount = 0, onCartOpen }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white tracking-widest">
              MERAUN<span className="text-red-500">.CLO</span>
            </h1>
          </a>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative text-white hover:text-red-500 transition-colors duration-200 p-2"
            >
              <Icon name="ShoppingBag" size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Dots menu */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-white hover:text-red-500 transition-colors duration-200 p-2">
                  <Icon name="MoreHorizontal" size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-red-500/20 w-72">
                <SheetHeader className="mb-6">
                  <SheetTitle className="font-orbitron text-white text-lg tracking-widest text-left">
                    MERAUN<span className="text-red-500">.CLO</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="px-3 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 rounded-lg transition-all duration-200 font-geist text-sm border-b border-white/5 last:border-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
