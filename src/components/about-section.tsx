import Icon from "@/components/ui/icon"

const values: { icon: string; title: string; text: string }[] = [
  {
    icon: "Flame",
    title: "Характер",
    text: "Каждая вещь — заявление. Мы не делаем одежду для толпы. Мы делаем одежду для тех, кто знает, кто он.",
  },
  {
    icon: "Layers",
    title: "Качество",
    text: "Плотные ткани, точный крой, выверенные пропорции. Ничего лишнего — только то, что работает.",
  },
  {
    icon: "Eye",
    title: "Взгляд",
    text: "Мы смотрим на улицу, а не на подиум. Наш дизайн рождается из реальной жизни — дворов, ночных городов, движения.",
  },
  {
    icon: "Repeat",
    title: "Честность",
    text: "Никакого фаст-фэшна. Ограниченные тиражи, осознанное производство, одежда которая служит годами.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-red-500 font-geist text-sm tracking-[0.3em] uppercase mb-4">О нас</p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-wide uppercase">
              Мы не бренд.<br />
              Мы —<span className="text-red-500"> точка зрения.</span>
            </h2>
            <p className="text-gray-400 font-geist text-lg leading-relaxed mb-6">
              Meraun.CLO появился не из маркетинга и не из бизнес-плана. Он появился из желания носить
              что-то настоящее — без логотипов ради логотипов, без трендов ради трендов.
            </p>
            <p className="text-gray-500 font-geist text-base leading-relaxed">
              Мы небольшая команда, которая верит: одежда должна молчать так же громко, как музыка
              в наушниках в три часа ночи. Тихо. Точно. Без лишних слов.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "2022", label: "Год основания" },
              { number: "12+", label: "Коллекций выпущено" },
              { number: "500", label: "Единиц в тираже" },
              { number: "100%", label: "Осознанное производство" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="font-orbitron text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="font-geist text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-white/5" />
          <p className="font-orbitron text-white/20 text-xs tracking-[0.4em] uppercase whitespace-nowrap">
            Наши принципы
          </p>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div
              key={val.title}
              className="group bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors duration-300">
                <Icon name={val.icon} size={20} className="text-red-500" />
              </div>
              <h3 className="font-orbitron text-white font-semibold mb-3 tracking-wide">{val.title}</h3>
              <p className="font-geist text-gray-500 text-sm leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-orbitron text-2xl md:text-3xl text-white/30 font-bold tracking-widest uppercase leading-relaxed max-w-3xl mx-auto">
            "Носи то, что ты есть.<br />
            <span className="text-red-500/60">Не то, чего от тебя ждут."</span>
          </blockquote>
          <p className="font-geist text-gray-600 text-sm mt-4 tracking-widest">— Meraun.CLO</p>
        </div>

      </div>
    </section>
  )
}
