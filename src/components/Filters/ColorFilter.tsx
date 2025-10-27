import FilterGroup from './FilterGroup'
import type { ColorFilterProps } from '@/interfaces'

const ColorFilter = ({
  title,
  options,
  selected,
  onToggle,
  onClear,
  colorMap,
}: ColorFilterProps) => {
  return (
    <FilterGroup
      id="color"
      title={title}
      selectedCount={selected.size}
      onClear={onClear}
    >
      <fieldset>
        <legend className="sr-only">{title}</legend>
        <ul className="grid auto-cols-max grid-flow-col gap-2 md:grid-flow-row md:grid-cols-4">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                aria-pressed={selected.has(option)}
                onClick={() => onToggle(option)}
                style={{ backgroundColor: colorMap?.[option] ?? option }}
                className={`w-8 h-8 rounded-full border-2 ${
                  selected.has(option)
                    ? 'ring-2 ring-offset-2 ring-[#2D6A4F]'
                    : 'border-transparent'
                }`}
              />
              <span className="block text-center text-xs mt-1">{option}</span>
            </li>
          ))}
        </ul>
      </fieldset>
    </FilterGroup>
  )
}
export default ColorFilter
