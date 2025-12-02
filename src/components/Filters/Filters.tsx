import ColorFilter from '@/components/Filters/ColorFilter'
import OccasionFilter from '@/components/Filters/OccasionFilter'
import SizeFilter from '@/components/Filters/SizeFilter'
import { useProducts } from '@/hooks/useProducts'

interface FiltersProps {
  selectedOccasions: Set<string>
  selectedColors: Set<string>
  selectedSizes: Set<string>
  toggleOccasion: (value: string) => void
  toggleColor: (value: string) => void
  toggleSize: (value: string) => void
  clearOccasions: () => void
  clearColors: () => void
  clearSizes: () => void
  clearAll: () => void
}

const Filters = ({
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
}: FiltersProps) => {
  const { products } = useProducts()

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
    pastel: '#cfe3fb',
  } as Record<string, string>

  const sizeOptions = Array.from(
    new Set(products.flatMap((p) => p.size_tags ?? []))
  ).sort()

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base md:text-lg font-bold text-[#0B0B0B] font-['Poppins']">
          Filtros
        </h2>
        <button
          onClick={clearAll}
          className="text-xs md:text-sm text-[#2D6A4F] hover:text-[#1a4030] font-medium transition-colors"
        >
          Limpiar todo
        </button>
      </div>

      <div className="pb-4 md:pb-6 border-b border-gray-200">
        <OccasionFilter
          title="Filtrar por Ocasión"
          options={occasionOptions}
          selected={selectedOccasions}
          onToggle={toggleOccasion}
          onClear={clearOccasions}
        />
      </div>

      <div className="pb-4 md:pb-6 border-b border-gray-200">
        <ColorFilter
          title="Filtrar por Color"
          options={colorOptions}
          selected={selectedColors}
          onToggle={toggleColor}
          onClear={clearColors}
          colorMap={colorMap}
        />
      </div>

      <div>
        <SizeFilter
          title="Filtrar por Tamaño"
          options={sizeOptions}
          selected={selectedSizes}
          onToggle={toggleSize}
          onClear={clearSizes}
          pill={true}
        />
      </div>
    </div>
  )
}
export default Filters
