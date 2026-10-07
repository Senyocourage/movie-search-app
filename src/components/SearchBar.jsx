function SearchBar() {
  return (
    <div className="flex justify-center gap-3 mt-8 px-4">

      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full max-w-md px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
      />

      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
        Search
      </button>

    </div>
  )
}

export default SearchBar