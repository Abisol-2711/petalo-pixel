import { Link } from 'react-router'

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="container mx-auto px-4 lg:px-8 flex h-20 items-center justify-between">
        <h1 className="text-2xl font-bold bg-linear-to-r from-[#2D6A4F] to-[#52b788] bg-clip-text text-transparent font-['Josefin_Sans']">
          Pétalo & Pixel
        </h1>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-base font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="text-base font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/catalogo"
              className="text-base font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors duration-200"
            >
              Catalogo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
