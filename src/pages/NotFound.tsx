import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div id="main" className="min-h-screen flex items-center justify-center bg-white">
            <div className="container mx-auto px-4 lg:px-8 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#F4A261]/10 text-4xl mb-8">
                        🌸
                    </div>

                    <h1 className="text-5xl font-bold text-[#0B0B0B] mb-4 font-['Josefin_Sans']">
                        Página no encontrada
                    </h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Lo sentimos, la página que buscás no existe o fue movida. Podés volver al inicio o explorar el catálogo.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-[#2D6A4F] text-white rounded-full font-medium text-sm hover:bg-[#1a4030] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                            aria-label="Volver al inicio"
                        >
                            Volver al inicio
                        </Link>

                        <Link
                            to="/catalogo"
                            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                            aria-label="Ir al catálogo"
                        >
                            Ver catálogo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound