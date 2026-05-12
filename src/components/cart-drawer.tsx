import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"
import { useState } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  qty: number
}

interface CartDrawerProps {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (id: number) => void
  onQtyChange: (id: number, qty: number) => void
}

export function CartDrawer({ open, onClose, items, onRemove, onQtyChange }: CartDrawerProps) {
  const [ordered, setOrdered] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", address: "" })

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setOrdered(true)
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="bg-black border-red-500/20 w-full sm:w-[420px] flex flex-col">
        <SheetHeader className="mb-4">
          <SheetTitle className="font-orbitron text-white tracking-widest text-left flex items-center gap-2">
            <Icon name="ShoppingBag" size={20} className="text-red-500" />
            Корзина
          </SheetTitle>
        </SheetHeader>

        {ordered ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <Icon name="Check" size={32} className="text-red-500" />
            </div>
            <h3 className="font-orbitron text-white text-xl">Заказ принят!</h3>
            <p className="text-gray-400 font-geist text-sm max-w-xs">
              Мы свяжемся с вами в ближайшее время для подтверждения.
            </p>
            <Button
              onClick={() => { setOrdered(false); onClose() }}
              className="bg-red-500 hover:bg-red-600 text-white border-0 mt-4"
            >
              Закрыть
            </Button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
            <Icon name="ShoppingBag" size={48} className="text-white/10" />
            <p className="text-gray-500 font-geist">Корзина пуста</p>
            <Button variant="outline" onClick={onClose} className="border-red-500/30 text-gray-300 hover:border-red-500 bg-transparent mt-2">
              Перейти в каталог
            </Button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {items.map((item) => (
                <div key={item.id} className="bg-zinc-900 rounded-xl p-4 border border-white/5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="font-orbitron text-white text-sm font-semibold leading-snug">{item.name}</span>
                    <button onClick={() => onRemove(item.id)} className="text-gray-500 hover:text-red-500 transition-colors flex-shrink-0">
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onQtyChange(item.id, Math.max(1, item.qty - 1))}
                        className="w-7 h-7 rounded-full border border-white/10 text-white hover:border-red-500 transition-colors flex items-center justify-center"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="text-white font-geist w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => onQtyChange(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full border border-white/10 text-white hover:border-red-500 transition-colors flex items-center justify-center"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                    <span className="font-orbitron text-white text-sm font-bold">
                      {(item.price * item.qty).toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="flex justify-between items-center mb-5">
                <span className="text-gray-400 font-geist">Итого</span>
                <span className="font-orbitron text-white text-xl font-bold">{total.toLocaleString("ru-RU")} ₽</span>
              </div>

              {/* Order form */}
              <form onSubmit={handleOrder} className="space-y-3">
                <div>
                  <Label className="text-gray-400 text-xs font-geist mb-1 block">Имя</Label>
                  <Input
                    required
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-zinc-900 border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 font-geist"
                  />
                </div>
                <div>
                  <Label className="text-gray-400 text-xs font-geist mb-1 block">Телефон</Label>
                  <Input
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-zinc-900 border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 font-geist"
                  />
                </div>
                <div>
                  <Label className="text-gray-400 text-xs font-geist mb-1 block">Адрес доставки</Label>
                  <Input
                    required
                    placeholder="Город, улица, дом"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="bg-zinc-900 border-white/10 text-white placeholder:text-gray-600 focus:border-red-500 font-geist"
                  />
                </div>
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white border-0 font-orbitron tracking-widest mt-2">
                  ОФОРМИТЬ ЗАКАЗ
                </Button>
              </form>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
