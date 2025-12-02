import { Link } from 'react-router'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="container mx-auto px-4 lg:px-8 flex h-16 md:h-20 items-center justify-between">
        <h1 className="text-base md:text-xl lg:text-2xl font-bold bg-linear-to-r from-[#2D6A4F] to-[#52b788] bg-clip-text text-transparent font-['Josefin_Sans']">
          Pétalo & Pixel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#2D6A4F] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/catalogo"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base font-medium text-gray-700 hover:text-[#2D6A4F] transition-colors duration-200"
              >
                Catalogo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
export default Header
