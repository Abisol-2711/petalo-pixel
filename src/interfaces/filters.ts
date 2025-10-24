export interface FilterGroupProps {
    id: string,
    title: string,
    selectedCount: number,
    onClear: () => void
    defaultOpen?: boolean
    children?: React.ReactNode
}

export interface BaseFiltersProps {
  title: string
  options: string[]
  selected: Set<string>
  onToggle: (value: string) => void
  onClear: () => void
}

export interface ColorFilterProps extends BaseFiltersProps {
  colorMap?: Record<string, string>
}

export interface SizeFilterProps extends BaseFiltersProps {
  pill?: boolean
}
