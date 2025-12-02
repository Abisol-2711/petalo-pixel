const About = () => {
  return (
    <div id="main" className="min-h-screen flex flex-col bg-white">
      <section className="bg-linear-to-br from-[#F3F4F6] via-white to-[#F3F4F6] py-8 md:py-12 lg:py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#2D6A4F]/10 text-[#2D6A4F] rounded-full text-xs md:text-sm font-medium">
                🌸 Nuestra Historia
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-4 md:mb-6 font-['Josefin_Sans']">
              Sobre Nosotros
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Donde la naturaleza se encuentra con el arte digital para crear
              experiencias florales únicas
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] font-['Poppins']">
                  Nuestra Pasión
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  En{' '}
                  <span className="font-semibold text-[#2D6A4F]">
                    Pétalo & Pixel
                  </span>
                  , creemos que cada arreglo floral cuenta una historia única.
                  Combinamos la belleza natural de las flores más frescas con
                  técnicas de diseño contemporáneo para crear piezas que
                  cautivan los sentidos.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Fundada por Lila Ferreyra, nuestra misión es transformar
                  momentos especiales en recuerdos inolvidables a través del
                  arte floral.
                </p>
              </div>
              <div className="relative order-first md:order-last">
                <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-[#2D6A4F]/20 to-[#F4A261]/20 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl">🌺</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] text-center font-['Poppins']">
                Nuestros Valores
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center p-6 md:p-8 rounded-2xl bg-[#F3F4F6] hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-3 md:mb-4">
                    💚
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-2 md:mb-3 font-['Poppins']">
                    Calidad
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Seleccionamos cuidadosamente las flores más frescas para
                    cada diseño
                  </p>
                </div>

                <div className="text-center p-6 md:p-8 rounded-2xl bg-[#F3F4F6] hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F4A261] rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-3 md:mb-4">
                    ✨
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-2 md:mb-3 font-['Poppins']">
                    Creatividad
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Cada arreglo es único y diseñado especialmente para ti
                  </p>
                </div>

                <div className="text-center p-6 md:p-8 rounded-2xl bg-[#F3F4F6] hover:shadow-lg transition-shadow duration-300 sm:col-span-2 md:col-span-1">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-3 md:mb-4">
                    🤝
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-2 md:mb-3 font-['Poppins']">
                    Compromiso
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Dedicados a superar tus expectativas en cada entrega
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-[#2D6A4F] to-[#1a4030] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-['Josefin_Sans']">
                Nuestra Misión
              </h2>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Crear arreglos florales excepcionales que transformen espacios y
                emociones, fusionando la belleza natural con diseño innovador
                para hacer de cada momento algo memorable.
              </p>
            </div>

            <div className="text-center space-y-4 md:space-y-6 py-6 md:py-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B0B0B] font-['Poppins']">
                ¿Listo para comenzar?
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
                Contáctanos hoy y descubre cómo podemos hacer realidad tu visión
                floral perfecta
              </p>
              <button className="px-8 py-3 md:px-10 md:py-4 bg-[#2D6A4F] text-white rounded-full hover:bg-[#1a4030] transition-colors duration-300 font-medium text-base md:text-lg">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About
