function Home() {
  return (
    <div id="main" className="min-h-screen flex flex-col bg-white">
      <section className="relative bg-linear-to-br from-[#F3F4F6] via-white to-[#F3F4F6] py-12 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 md:w-72 md:h-72 bg-[#2D6A4F]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#F4A261]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#2D6A4F]/10 text-[#2D6A4F] rounded-full text-xs md:text-sm font-medium">
                  ✨ Diseños Florales Únicos
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0B0B0B] leading-tight font-['Josefin_Sans']">
                Naturaleza & Arte
                <span className="block mt-2 bg-linear-to-r from-[#2D6A4F] to-[#52b788] bg-clip-text text-transparent">
                  Digital Unidos
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Descubre arreglos florales únicos que combinan la belleza
                natural con el diseño contemporáneo. Cada pieza es una obra de
                arte creada con pasión y dedicación.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <button className="px-6 py-3 md:px-8 md:py-4 bg-[#2D6A4F] text-white rounded-full hover:bg-[#1a4030] transition-colors duration-300 font-medium text-base md:text-lg">
                  Explorar Colección
                </button>
                <button className="px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-[#2D6A4F] text-[#2D6A4F] rounded-full hover:bg-[#2D6A4F] hover:text-white transition-all duration-300 font-medium text-base md:text-lg">
                  Conocer Más
                </button>
              </div>

              <div className="flex gap-6 md:gap-8 pt-6 md:pt-8">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#2D6A4F] font-['Poppins']">
                    500+
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Diseños Únicos
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#F4A261] font-['Poppins']">
                    1000+
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Clientes Felices
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#2D6A4F] font-['Poppins']">
                    100%
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Satisfacción
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/hero.jpg"
                  alt="Arreglo floral Pétalo & Pixel"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>

              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-xs">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F4A261] rounded-full flex items-center justify-center text-xl md:text-2xl">
                    ⭐
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base text-[#0B0B0B]">
                      Calidad Premium
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      Flores frescas del día
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-3 md:mb-4 font-['Poppins']">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Nos dedicamos a crear experiencias únicas con cada arreglo floral
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="group p-6 md:p-8 rounded-2xl bg-linear-to-br from-[#F3F4F6] to-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2D6A4F] rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 group-hover:rotate-6 transition-transform">
                🌿
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-3 md:mb-4 font-['Poppins']">
                Flores Frescas
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Seleccionamos las mejores flores cada día para garantizar
                frescura y calidad
              </p>
            </div>

            <div className="group p-6 md:p-8 rounded-2xl bg-linear-to-br from-[#F3F4F6] to-white hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F4A261] rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 group-hover:rotate-6 transition-transform">
                🎨
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-3 md:mb-4 font-['Poppins']">
                Diseño Único
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Cada arreglo es una pieza de arte diseñada especialmente para ti
              </p>
            </div>

            <div className="group p-6 md:p-8 rounded-2xl bg-linear-to-br from-[#F3F4F6] to-white hover:shadow-xl transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2D6A4F] rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 group-hover:rotate-6 transition-transform">
                🚚
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-3 md:mb-4 font-['Poppins']">
                Entrega Rápida
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Entregamos tus flores en perfectas condiciones donde las
                necesites
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-linear-to-r from-[#2D6A4F] to-[#1a4030] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#F4A261] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-['Josefin_Sans'] px-4">
            ¿Listo para crear algo especial?
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Contáctanos hoy y hagamos realidad tu arreglo floral perfecto
          </p>
          <button className="px-8 py-3 md:px-10 md:py-4 bg-[#F4A261] text-white rounded-full hover:bg-[#e76f51] transition-colors duration-300 font-medium text-base md:text-lg">
            Comenzar Ahora
          </button>
        </div>
      </section>
    </div>
  )
}
export default Home
