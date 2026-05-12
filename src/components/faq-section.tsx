import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как подобрать размер?",
      answer:
        "На каждой карточке товара есть размерная таблица. Наши вещи оверсайз-кроя — если сомневаетесь, берите свой обычный размер. Можно написать нам, поможем с выбором.",
    },
    {
      question: "Из каких материалов сделана одежда?",
      answer:
        "Используем плотный хлопок 320–400 г/м², французская махра и комбинированные составы. Состав всегда указан в карточке товара.",
    },
    {
      question: "Сколько единиц в тираже?",
      answer:
        "Каждая позиция выходит ограниченным тиражом — от 50 до 500 единиц. Когда товар заканчивается, он не возвращается в продажу. Следи за новинками.",
    },
    {
      question: "Можно ли вернуть или обменять товар?",
      answer:
        "Да. В течение 14 дней с момента получения принимаем возврат и обмен на товар без следов носки, с бирками. Напиши нам — разберёмся.",
    },
    {
      question: "Когда выходят новые коллекции?",
      answer:
        "Дропы выходят без расписания. Подпишись на наш Telegram, чтобы узнавать первым.",
    },
    {
      question: "Есть ли программа для постоянных покупателей?",
      answer:
        "Да, у нас есть реферальная программа. Приводи друзей — получай скидки и приоритетный доступ к новым дропам.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-geist">
            Ответы на популярные вопросы о товарах, размерах и заказах.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}