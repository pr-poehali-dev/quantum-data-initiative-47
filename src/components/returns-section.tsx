import Icon from "@/components/ui/icon"

const conditions = [
  {
    icon: "CheckCircle",
    title: "Принимаем возврат",
    items: [
      "Товар не был в носке",
      "Бирки и упаковка сохранены",
      "Прошло не более 14 дней с получения",
      "Товар без следов стирки и деформации",
    ],
    positive: true,
  },
  {
    icon: "XCircle",
    title: "Не принимаем возврат",
    items: [
      "Товар был в носке или постиран",
      "Бирки срезаны или отсутствуют",
      "Прошло более 14 дней",
      "Товар из раздела «Финальная распродажа»",
    ],
    positive: false,
  },
]

const steps = [
  {
    icon: "MessageCircle",
    num: "01",
    title: "Напиши нам",
    text: "Свяжись через Telegram или email. Укажи номер заказа и причину возврата.",
  },
  {
    icon: "Package",
    num: "02",
    title: "Упакуй товар",
    text: "Сложи вещь обратно в оригинальную упаковку с бирками. Вложи бланк возврата — мы пришлём.",
  },
  {
    icon: "Truck",
    num: "03",
    title: "Отправь посылку",
    text: "Отправь любой удобной службой. Стоимость обратной доставки — за твой счёт.",
  },
  {
    icon: "Wallet",
    num: "04",
    title: "Получи деньги",
    text: "После проверки товара вернём деньги в течение 3–5 рабочих дней на карту.",
  },
]

export function ReturnsSection() {
  return (
    <section id="returns" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-geist text-sm tracking-[0.3em] uppercase mb-4">Политика</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Возврат и обмен
          </h2>
          <p className="text-gray-400 font-geist text-lg max-w-xl mx-auto">
            14 дней на возврат. Без лишних вопросов — просто напиши нам.
          </p>
        </div>

        {/* Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {conditions.map((block) => (
            <div
              key={block.title}
              className={`bg-zinc-900 border rounded-2xl p-8 ${
                block.positive ? "border-green-500/20" : "border-red-500/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon
                  name={block.icon}
                  size={22}
                  className={block.positive ? "text-green-400" : "text-red-400"}
                />
                <h3 className="font-orbitron text-white font-semibold tracking-wide">{block.title}</h3>
              </div>
              <ul className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        block.positive ? "bg-green-500/10" : "bg-red-500/10"
                      }`}
                    >
                      <Icon
                        name={block.positive ? "Check" : "X"}
                        size={12}
                        className={block.positive ? "text-green-400" : "text-red-400"}
                      />
                    </span>
                    <span className="font-geist text-gray-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div>
          <div className="flex items-center gap-6 mb-10">
            <div className="flex-1 h-px bg-white/5" />
            <p className="font-orbitron text-white/20 text-xs tracking-[0.4em] uppercase whitespace-nowrap">
              Как оформить возврат
            </p>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="group bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 slide-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                    <Icon name={s.icon} size={18} className="text-red-500" />
                  </div>
                  <span className="font-orbitron text-3xl font-bold text-white/5">{s.num}</span>
                </div>
                <h4 className="font-orbitron text-white font-semibold mb-2 tracking-wide text-sm">{s.title}</h4>
                <p className="font-geist text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA contact */}
        <div className="bg-gradient-to-r from-red-500/10 via-red-500/5 to-red-500/10 border border-red-500/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-orbitron text-white font-bold tracking-wide mb-1">Остались вопросы?</h3>
            <p className="font-geist text-gray-400 text-sm">
              Напиши нам — ответим в течение нескольких часов.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://t.me/meraunCLO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white font-orbitron text-xs tracking-widest uppercase transition-colors duration-200 rounded-lg"
            >
              <Icon name="Send" size={14} />
              Telegram
            </a>
            <a
              href="mailto:semensaporev166@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/10 hover:border-red-500/50 text-gray-300 hover:text-white font-orbitron text-xs tracking-widest uppercase transition-all duration-200 rounded-lg"
            >
              <Icon name="Mail" size={14} />
              Email
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}