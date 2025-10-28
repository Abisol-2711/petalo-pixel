import FilterGroup from './FilterGroup'
import type { BaseFiltersProps } from '@/interfaces'

const OccasionFilter = ({
  title,
  options,
  selected,
  onToggle,
  onClear,
}: BaseFiltersProps) => {
  return (
    <FilterGroup
      id="occasion"
      title={title}
      selectedCount={selected.size}
      onClear={onClear}
    >
      <fieldset>
        <legend className="sr-only">{title}</legend>
        {options.map((option) => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`occasion-${option}`}
              checked={selected.has(option)}
              onChange={() => onToggle(option)}
              className="mr-2 h-4 w-4 text-[#2D6A4F] border-gray-300 rounded focus:ring-[#2D6A4F]"
            />
            <label
              htmlFor={`occasion-${option}`}
              className="text-gray-700 text-sm cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
      </fieldset>
    </FilterGroup>
  )
}
export default OccasionFilter
