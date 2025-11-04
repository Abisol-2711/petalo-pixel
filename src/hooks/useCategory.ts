import { useState } from "react"

export function useCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  function selectCategory(value: string | null) { setSelectedCategory(value) }
  function clearCategory() { setSelectedCategory(null) }

  return { selectedCategory, selectCategory, clearCategory }
}
