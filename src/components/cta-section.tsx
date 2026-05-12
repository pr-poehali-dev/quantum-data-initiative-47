import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-orbitron text-balance tracking-widest uppercase">
            Стань частью Meraun
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-geist">
            Одежда — это язык. Meraun.CLO создаёт вещи для тех, кто говорит громко молчанием своего стиля.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white border-0 pulse-button text-lg px-8 py-4 font-orbitron tracking-widest"
              onClick={() => document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-500/50 text-white hover:bg-red-500 hover:text-white text-lg px-8 py-4 bg-transparent font-geist"
              onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Лист ожидания коллекции
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}