import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4 tracking-widest">
              MERAUN<span className="text-red-500">.CLO</span>
            </h2>
            <p className="font-geist text-gray-400 mb-6 max-w-md">
              Одежда для тех, кто живёт своим путём. Качество, стиль, характер.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4 tracking-wide">Каталог</h3>
            <ul className="space-y-2">
              {["Все товары", "Новинки", "Бестселлеры", "Худи", "Футболки", "Свитеры"].map((item) => (
                <li key={item}>
                  <a href="#catalog" className="font-geist text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4 tracking-wide">Компания</h3>
            <ul className="space-y-2">
              {[
                { label: "О нас", href: "#about" },
                { label: "Галерея", href: "#gallery" },
                { label: "Доставка", href: "#delivery" },
                { label: "Возврат и обмен", href: "#returns" },
                { label: "Вакансии", href: "#careers" },
                { label: "Документы", href: "#documents" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-geist text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-geist text-gray-500 text-sm">© 2026 Meraun.CLO. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#documents" className="font-geist text-gray-500 hover:text-red-500 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#documents" className="font-geist text-gray-500 hover:text-red-500 text-sm transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}