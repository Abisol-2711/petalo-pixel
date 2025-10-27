import Categories from '@/components/Categories'
import ColorFilter from '@/components/Filters/ColorFilter'
import OccasionFilter from '@/components/Filters/OccasionFilter'
import SizeFilter from '@/components/Filters/SizeFilter'
import ProductCard from '@/components/ProductCard'
import { useFilters } from '@/hooks/useFilters'
import { useProducts } from '@/hooks/useProducts'

function Catalog() {
  const {
    selectedOccasions,
    selectedColors,
    selectedSizes,
    toggleOccasion,
    clearOccasions,
    toggleColor,
    clearColors,
    toggleSize,
    clearSizes,
    clearAll,
  } = useFilters()

  const { products, loading, error } = useProducts()

  const occasionOptions = Array.from(
    new Set(products.flatMap((p) => p.occasion_tags ?? []))
  ).sort()

  const colorOptions = Array.from(
    new Set(products.flatMap((p) => p.color_tags ?? []))
  ).sort()

  const colorMap = {
    rosa: '#F472B6',
    verde: '#22C55E',
    blanco: '#FFFFFF',
    amarillo: '#FACC15',
    // si alguna opción no está, ColorFilter usará el string tal cual
  } as Record<string, string>

  const sizeOptions = Array.from(
    new Set(products.flatMap((p) => p.size_tags ?? []))
  ).sort()

  const filteredProducts = products.filter((product) => {
    const matchesOccasion =
      selectedOccasions.size === 0 ||
      product.occasion_tags.some((tag) => selectedOccasions.has(tag))

    const matchesColor =
      selectedColors.size === 0 ||
      product.color_tags.some((tag) => selectedColors.has(tag))

    const matchesSize =
      selectedSizes.size === 0 ||
      product.size_tags.some((tag) => selectedSizes.has(tag))

    return matchesOccasion && matchesColor && matchesSize
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#2D6A4F] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Cargando productos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-600 font-medium">Error: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div id="main" className="min-h-screen flex flex-col bg-white">
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
        <Categories />

        <div className="flex items-center gap-4">
          <OccasionFilter
            title="Filtrar por Ocasión"
            options={occasionOptions}
            selected={selectedOccasions}
            onToggle={toggleOccasion}
            onClear={clearOccasions}
          />

          <ColorFilter
            title="Filtrar por Color"
            options={colorOptions}
            selected={selectedColors}
            onToggle={toggleColor}
            onClear={clearColors}
            colorMap={colorMap}
          />

          <SizeFilter
            title="Filtrar por Tamaño"
            options={sizeOptions}
            selected={selectedSizes}
            onToggle={toggleSize}
            onClear={clearSizes}
            pill={true}
          />

          <button
            onClick={clearAll}
            className="ml-auto text-sm text-gray-500 hover:underline"
          >
            Limpiar todos los Filtros
          </button>

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
      </section>

      <section className="py-12 bg-white grow">
        <div className="container mx-auto px-4 lg:px-8">
          <ProductCard products={filteredProducts} />
        </div>
      </section>
    </div>
  )
}
export default Catalog
