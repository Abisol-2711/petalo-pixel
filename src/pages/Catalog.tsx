import Categories from '@/components/Categories'
import Filters from '@/components/Filters/Filters'
import ProductCard from '@/components/ProductCard'
import { useProducts } from '@/hooks/useProducts'
import { useFilters } from '@/hooks/useFilters'
import { useCategory } from '@/hooks/useCategory'
import { useCategoriesData } from '@/hooks/useCategoriesData'

function Catalog() {
  const { products, loading, error } = useProducts()

  const {
    selectedOccasions,
    selectedColors,
    selectedSizes,
    toggleOccasion,
    toggleColor,
    toggleSize,
    clearOccasions,
    clearColors,
    clearSizes,
    clearAll,
  } = useFilters()

  const { selectedCategory, selectCategory, clearCategory } = useCategory()
  const { categories } = useCategoriesData()

  const options = categories.map((c) => ({
    label: c.name,
    value: c.slug,
    id: c.id,
  }))

  const categoryMap = new Map(categories.map((c) => [c.slug, c.id]))

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === null ||
      product.category_id === categoryMap.get(selectedCategory)

    const matchesOccasion =
      selectedOccasions.size === 0 ||
      product.occasion_tags.some((tag) => selectedOccasions.has(tag))

    const matchesColor =
      selectedColors.size === 0 ||
      product.color_tags.some((tag) => selectedColors.has(tag))

    const matchesSize =
      selectedSizes.size === 0 ||
      product.size_tags.some((tag) => selectedSizes.has(tag))

    return matchesCategory && matchesOccasion && matchesColor && matchesSize
  })

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4 mt-20">
        <div className="w-12 h-12 border-4 border-[#2D6A4F] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium">Cargando productos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
        <p className="text-red-600 font-medium">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="bg-linear-to-br from-[#F3F4F6] via-white to-[#F3F4F6] py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#2D6A4F]/10 text-[#2D6A4F] rounded-full text-sm font-medium">
              🌸 Colección Completa
            </span>
          </div>
          <h1 className="text-5xl font-bold text-[#0B0B0B] mb-4 font-['Josefin_Sans']">
            Catálogo de Flores
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explora nuestra colección de arreglos florales únicos, diseñados con
            pasión y cuidado para cada ocasión especial.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-gray-200 flex justify-center">
        <Categories
          options={options}
          selected={selectedCategory}
          onSelect={selectCategory}
          onClear={clearCategory}
        />
      </section>

      {/* <section className="py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 flex justify-end items-center gap-3">
          <span className="text-sm text-gray-600 font-medium">Vista:</span>
          <div className="flex gap-2">
            <button
              className="p-2.5 bg-[#2D6A4F] text-white rounded-lg hover:bg-[#1a4030] transition-colors"
              title="Vista de cuadrícula"
            >
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
            <button
              className="p-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-[#F3F4F6] transition-colors"
              title="Vista de lista"
            >
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
      </section> */}

      <section className="flex mx-auto px-4 lg:px-8 py-12 gap-8 lg:grid lg:grid-cols-[280px_1fr]">
        <aside>
          <Filters
            selectedOccasions={selectedOccasions}
            selectedColors={selectedColors}
            selectedSizes={selectedSizes}
            toggleOccasion={toggleOccasion}
            toggleColor={toggleColor}
            toggleSize={toggleSize}
            clearOccasions={clearOccasions}
            clearColors={clearColors}
            clearSizes={clearSizes}
            clearAll={clearAll}
          />
        </aside>

        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                No se encontraron productos
              </h2>
              <p className="text-gray-600">
                Intenta ajustar los filtros o vuelve a la categoría completa.
              </p>
            </div>
          ) : (
            <ProductCard products={filteredProducts} />
          )}
        </div>
      </section>
    </div>
  )
}
export default Catalog
