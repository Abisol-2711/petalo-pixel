import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { ProductProps } from '@/interfaces'

function ProductCard({ products }: { products: ProductProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white p-0"
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden bg-[#F3F4F6] aspect-square">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.color_tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-[#2D6A4F] rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 right-4">
                <div className="bg-[#F4A261] text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  ${product.price_base}
                </div>
              </div>
            </div>
          </CardContent>

          <CardHeader className="space-y-3 p-6">
            <CardTitle className="text-xl font-['Poppins'] text-[#0B0B0B] group-hover:text-[#2D6A4F] transition-colors">
              {product.name}
            </CardTitle>
            <CardDescription className="text-gray-600 line-clamp-2 leading-relaxed">
              {product.description}
            </CardDescription>

            {product.occasion_tags && product.occasion_tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {product.occasion_tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-[#F3F4F6] text-xs text-gray-700 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <button className="w-full mt-4 px-6 py-3 bg-[#2D6A4F] text-white rounded-full hover:bg-[#1a4030] transition-all duration-300 font-medium hover:shadow-lg transform hover:-translate-y-0.5">
              Ver Detalles
            </button>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
export default ProductCard
