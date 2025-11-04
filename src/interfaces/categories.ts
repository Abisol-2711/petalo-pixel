export interface CategoriesProps {
  options: Array<{ label: string; value: string; id?: string }>
  selected: string | null
  onSelect: (value: string | null) => void
  onClear: () => void
}
