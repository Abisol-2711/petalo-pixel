import type { FilterGroupProps } from '@/interfaces'

const FilterGroup = ({
  title,
  selectedCount,
  onClear,
  children,
}: FilterGroupProps) => {
  return (
    <>
      <p>{title}</p>
      {children}
      {selectedCount > 0 && (
        <button
          onClick={onClear}
          className="text-sm text-[#E76F51] hover:underline mt-2"
        >
          Limpiar Filtros
        </button>
      )}
    </>
  )
}
export default FilterGroup
