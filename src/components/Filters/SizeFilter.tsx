import FilterGroup from './FilterGroup'
import type { SizeFilterProps } from '@/interfaces'

const SizeFilter = ({
  title,
  options,
  selected,
  onToggle,
  onClear,
}: SizeFilterProps) => {
  return (
    <FilterGroup
      id="size"
      title={title}
      selectedCount={selected.size}
      onClear={onClear}
    >
      <fieldset>
        <legend className="sr-only">{title}</legend>
        <ul className="flex flex-wrap gap-2">
          {options.map((option) => {
            const active = selected.has(option)
            return (
              <li key={option}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => onToggle(option)}
                  className={`px-3 py-1 text-sm font-medium transition-all rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2 ${
                    active
                      ? 'bg-[#2D6A4F] text-white border border-[#2D6A4F] shadow-sm'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </button>
              </li>
            )
          })}
        </ul>
      </fieldset>
    </FilterGroup>
  )
}
export default SizeFilter
