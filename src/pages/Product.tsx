import { useProductDetail } from '@/hooks/useProductDetail'
import { useParams } from 'react-router'
import { useState } from 'react'

const Product = () => {
  const { slug } = useParams()
  const { product, loading, error } = useProductDetail(slug)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const colorMap: Record<string, string> = {
    rosa: '#F472B6',
    verde: '#22C55E',
    blanco: '#FFFFFF',
    amarillo: '#FACC15',
    pastel: '#cfe3fb',
    surtido:
      'linear-gradient(135deg, #F472B6 0%, #22C55E 25%, #FACC15 50%, #cfe3fb 75%, #F472B6 100%)',
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex justify-center items-center py-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#2D6A4F] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-medium">Cargando producto...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex-1 flex justify-center items-center py-20">
          <div className="text-center max-w-md px-6">
            <div className="mb-6">
              <svg
                className="w-24 h-24 mx-auto text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 font-['Poppins']">
              Producto no encontrado
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              No pudimos encontrar el producto que buscas. Por favor, intenta
              con otro o explora nuestro catálogo.
            </p>
            <a
              href="/catalogo"
              className="inline-block px-8 py-3 bg-[#2D6A4F] text-white rounded-full hover:bg-[#1a4030] transition-colors duration-200 font-medium"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex-1 flex justify-center items-center py-20">
          <div className="text-center max-w-md px-6">
            <div className="mb-6">
              <svg
                className="w-24 h-24 mx-auto text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 font-['Poppins']">
              Producto no encontrado
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              El producto que estás buscando no existe o fue removido de nuestro
              catálogo.
            </p>
            <a
              href="/catalogo"
              className="inline-block px-8 py-3 bg-[#2D6A4F] text-white rounded-full hover:bg-[#1a4030] transition-colors duration-200 font-medium"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="container mx-auto px-4 lg:px-8 py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div className="space-y-3 md:space-y-4">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-[#F3F4F6]">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>

            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                {product.images.slice(1, 5).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:opacity-75 transition-opacity"
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 2}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B0B0B] mb-3 md:mb-4 font-['Josefin_Sans']">
                {product.name}
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.categories?.name && (
              <div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Categoría
                </h3>
                <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#F3F4F6] text-gray-800 rounded-full text-xs md:text-sm font-medium">
                  {product.categories.name}
                </span>
              </div>
            )}

            {product.occasion_tags && product.occasion_tags.length > 0 && (
              <div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Ideal para
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.occasion_tags.map((occasion) => (
                    <span
                      key={occasion}
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-[#2D6A4F]/10 text-[#2D6A4F] rounded-full text-xs md:text-sm font-medium"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.color_tags && product.color_tags.length > 0 && (
              <div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Colores{' '}
                  <span className="text-gray-500 text-xs">
                    (Selecciona uno)
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.color_tags.map((color) => {
                    const isGradient = color === 'surtido'
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className="flex flex-col items-center gap-1.5 md:gap-2 group"
                        title={color}
                      >
                        <div
                          style={
                            isGradient
                              ? { background: colorMap[color] }
                              : { backgroundColor: colorMap[color] || color }
                          }
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-colors duration-200 ${
                            selectedColor === color
                              ? 'border-[#2D6A4F] ring-2 ring-offset-2 ring-[#2D6A4F]'
                              : 'border-gray-300 group-hover:border-[#2D6A4F]'
                          }`}
                        />
                        <span className="text-xs text-gray-600 capitalize">
                          {color}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {product.size_tags && product.size_tags.length > 0 && (
              <div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  Tamaño{' '}
                  <span className="text-gray-500 text-xs">
                    (Selecciona uno)
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {product.size_tags.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-2 border-[#2D6A4F] transition-colors duration-200 ${
                        selectedSize === size
                          ? 'bg-[#2D6A4F] text-white'
                          : 'bg-white text-gray-700 hover:bg-[#2D6A4F] hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-4 md:pt-6 border-t border-gray-200">
              <div>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Precio</p>
                <p className="text-3xl md:text-4xl font-bold text-[#2D6A4F] font-['Poppins']">
                  ${product.price_base}
                </p>
              </div>
              <button
                disabled={!selectedSize || !selectedColor}
                className={`flex-1 px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-base md:text-lg transition-colors duration-200 ${
                  selectedSize && selectedColor
                    ? 'bg-[#2D6A4F] text-white hover:bg-[#1a4030]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                }`}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
