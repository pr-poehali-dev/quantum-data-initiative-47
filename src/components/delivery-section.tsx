import Icon from "@/components/ui/icon"

const methods = [
  {
    icon: "Truck",
    title: "Курьер",
    price: "от 350 ₽",
    time: "1–3 дня",
    desc: "Доставка до двери. Москва и СПб — на следующий день при заказе до 16:00.",
  },
  {
    icon: "Package",
    title: "СДЭК / Boxberry",
    price: "от 250 ₽",
    time: "2–5 дней",
    desc: "Получи в ближайшем пункте выдачи. Более 10 000 точек по всей России.",
  },
  {
    icon: "Mail",
    title: "Почта России",
    price: "от 150 ₽",
    time: "5–14 дней",
    desc: "Доступно в любую точку страны, включая отдалённые регионы.",
  },
  {
    icon: "Globe",
    title: "Международная",
    price: "по тарифу",
    time: "7–21 день",
    desc: "Отправляем в страны СНГ и Европу. Уточни стоимость при оформлении.",
  },
]

const steps = [
  { num: "01", title: "Оформи заказ", text: "Добавь товары в корзину и заполни данные." },
  { num: "02", title: "Подтверждение", text: "Мы свяжемся с тобой в течение 2 часов для подтверждения." },
  { num: "03", title: "Упаковка", text: "Бережно упакуем и передадим в службу доставки." },
  { num: "04", title: "Трекинг", text: "Пришлём номер для отслеживания посылки." },
]

export function DeliverySection() {
  return (
    <section id="delivery" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-geist text-sm tracking-[0.3em] uppercase mb-4">Логистика</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Доставка
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-xl mx-auto">
            Работаем с проверенными службами. Бесплатная доставка при заказе от 7 000 ₽.
          </p>
        </div>

        {/* Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {methods.map((m, i) => (
            <div
              key={m.title}
              className="group bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 group-hover:bg-red-500/20 transition-colors duration-300">
                <Icon name={m.icon} size={22} className="text-red-500" />
              </div>
              <h3 className="font-orbitron text-white font-semibold mb-1 tracking-wide">{m.title}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-geist text-red-400 text-sm font-semibold">{m.price}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="font-geist text-gray-500 text-sm">{m.time}</span>
              </div>
              <p className="font-geist text-gray-500 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Free delivery banner */}
        <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 border border-red-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-20">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <Icon name="Sparkles" size={20} className="text-red-500" />
            </div>
            <div>
              <p className="font-orbitron text-white font-semibold tracking-wide">Бесплатная доставка</p>
              <p className="font-geist text-gray-400 text-sm">При заказе от 7 000 ₽ — любым способом по России</p>
            </div>
          </div>
          <a
            href="#catalog"
            className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-orbitron text-xs tracking-widest uppercase transition-colors duration-200 rounded-lg whitespace-nowrap"
          >
            В каталог
          </a>
        </div>

        {/* How it works */}
        <div>
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-1 h-px bg-white/5" />
            <p className="font-orbitron text-white/20 text-xs tracking-[0.4em] uppercase whitespace-nowrap">Как это работает</p>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-white/5 z-0" style={{ width: "calc(100% - 24px)", left: "calc(100% - 0px)" }} />
                )}
                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 relative z-10">
                  <div className="font-orbitron text-4xl font-bold text-white/5 mb-3">{s.num}</div>
                  <h4 className="font-orbitron text-white font-semibold mb-2 tracking-wide text-sm">{s.title}</h4>
                  <p className="font-geist text-gray-500 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
