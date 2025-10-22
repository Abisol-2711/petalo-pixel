import ProductCard from '@/components/ProductCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Catalog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-linear-to-br from-[#F3F4F6] via-white to-[#F3F4F6] py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#2D6A4F]/10 text-[#2D6A4F] rounded-full text-sm font-medium">
                🌸 Colección Completa
              </span>
            </div>
            <h1 className="text-5xl font-bold text-[#0B0B0B] mb-4 font-['Josefin_Sans']">
              Catálogo de Flores
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explora nuestra colección de arreglos florales únicos, diseñados
              con pasión y cuidado para cada ocasión especial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-gray-200 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-[#2D6A4F] text-white rounded-full font-medium text-sm hover:bg-[#1a4030] transition-all duration-300">
                Todos
              </button>
              <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300">
                Bodas
              </button>
              <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300">
                Cumpleaños
              </button>
              <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300">
                Aniversarios
              </button>
              <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300">
                Corporativo
              </button>
            </div>

            <div className="flex items-center gap-4">
              <select className="px-4 py-2.5 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] cursor-pointer">
                <option>Ordenar por</option>
                <option>Más recientes</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
                <option>Más populares</option>
              </select>

              <div className="flex gap-2">
                <button className="p-2.5 bg-[#2D6A4F] text-white rounded-lg hover:bg-[#1a4030] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button className="p-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-[#F3F4F6] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white grow">
        <div className="container mx-auto px-4 lg:px-8">
          <ProductCard />
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default Catalog
