const Categories = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="px-5 py-2.5 bg-[#2D6A4F] text-white rounded-full font-medium text-sm hover:bg-[#1a4030] transition-all duration-300">
        Todos
      </button>
      <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300">
        Minimal
      </button>
      <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300">
        Cumpleaños
      </button>
      <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-[#F3F4F6] transition-all duration-300">
        Aniversarios
      </button>
    </div>
  )
}
export default Categories
