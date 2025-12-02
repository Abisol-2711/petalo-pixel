import type { CategoriesProps } from '@/interfaces/categories'

const Categories = ({
  options,
  selected,
  onSelect,
  onClear,
}: CategoriesProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
      <button
        onClick={onClear}
        className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium text-xs md:text-sm border transition-colors duration-300 ${
          selected === null
            ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        Todos
      </button>

      {options.map((opt) => (
        <button
          key={opt.id || opt.value}
          onClick={() => onSelect(opt.value)}
          className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium text-xs md:text-sm border transition-colors duration-300 ${
            selected === opt.value
              ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
          aria-pressed={selected === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export default Categories
