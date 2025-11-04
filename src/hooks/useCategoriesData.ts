import { useEffect, useState } from 'react'
import { supabase } from '@/supabase/config';

interface Props {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export function useCategoriesData() {
  const [categories, setCategories] = useState<Array<Props>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name, slug, description')
        .order('name')

      if (error) setError(error.message)
      else setCategories(data || [])
      setLoading(false)
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}
