import { useState } from "react"

export function useFilters() {
    const [selectedOccasions, setSelectedOccasions] = useState<Set<string>>(new Set())
    const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set())
    const [selectedSizes, setSelectedSizes] = useState<Set<string>>(new Set())

    const occasionCount = selectedOccasions.size
    const colorCount    = selectedColors.size
    const sizeCount     = selectedSizes.size
    const hasAnyFilter  = occasionCount > 0 || colorCount > 0 || sizeCount > 0


    function toggleOccasion(value: string) {
        setSelectedOccasions(prev => {
            const next = new Set(prev)
            if (next.has(value)) next.delete(value)
            else next.add(value)
            return next
        })
    }

    function toggleColor(value: string) {
        setSelectedColors(prev => {
            const next = new Set(prev)
            if (next.has(value)) next.delete(value)
            else next.add(value)
            return next
        })
    }

    function toggleSize(value: string) {
        setSelectedSizes(prev => {
            const next = new Set(prev)
            if (next.has(value)) next.delete(value)
            else next.add(value)
            return next
        })
    }   

    function clearOccasions() { setSelectedOccasions(new Set()) }
    function clearColors() { setSelectedColors(new Set()) }
    function clearSizes() { setSelectedSizes(new Set()) }
    function clearAll() {
        setSelectedOccasions(new Set())
        setSelectedColors(new Set())
        setSelectedSizes(new Set())
    }

return {
  // estado
  selectedOccasions,
  selectedColors,
  selectedSizes,

  // acciones
  toggleOccasion,
  toggleColor,
  toggleSize,
  clearOccasions,
  clearColors,
  clearSizes,
  clearAll,

  // derivados
  occasionCount,
  colorCount,
  sizeCount,
  hasAnyFilter,
}
}