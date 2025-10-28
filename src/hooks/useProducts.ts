import { supabase } from "@/supabase/config"
import { useEffect, useState } from "react"
import type { ProductProps } from "@/interfaces"

  
export function useProducts() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('products')
          .select('*')
        if (error) {
          throw error
        }
        setProducts(data || [])
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError(String(err))
        }
      } finally {
        setLoading(false)
      }
    }
  
    fetchProducts()
  }, [])

  return { products, loading, error }
}