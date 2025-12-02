import { supabase } from "@/supabase/config"
import { useEffect, useState } from "react"
import type { ProductProps } from "@/interfaces"

export function useProductDetail(slug: string | undefined) {
  const [product, setProduct] = useState<ProductProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    const fetchProduct = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from("products")
          .select(`
            *,
            categories(name)
          `)
          .eq("slug", slug)
          .single()

        if (error) throw error
        setProduct(data)
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message)
        else setError(String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [slug])

  return { product, loading, error }
}
