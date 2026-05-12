import { useState } from "react"
import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { CatalogSection } from "@/components/catalog-section"
import { AboutSection } from "@/components/about-section"
import { DeliverySection } from "@/components/delivery-section"
import { ReturnsSection } from "@/components/returns-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartDrawer, CartItem } from "@/components/cart-drawer"

export default function Index() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const handleAddToCart = (product: { id: number; name: string; price: number }) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  const handleQtyChange = (id: number, qty: number) => {
    setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i))
  }

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="dark">
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero3D />
        <CatalogSection onAddToCart={handleAddToCart} />
        <AboutSection />
        <DeliverySection />
        <ReturnsSection />
        <GallerySection />
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemove}
        onQtyChange={handleQtyChange}
      />
    </div>
  )
}