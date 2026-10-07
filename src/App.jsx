import {useState} from 'react'
import MovieCard from "./components/MovieCard"



function App() {
 const [searchTerm, setSearchTerm] = useState('')
 const[movies,setMovies] = useState([])
  const handleSearch = async () => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
  )

  const data = await response.json()

  setMovies(data.Search)
  
}
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <h1 className="text-4xl font-bold text-center pt-10">
        Movie Search
      </h1>

      <div className="flex justify-center mt-8 px-4">

        <input
          type="text"
          placeholder="Search for a movie..."
          className="w-full max-w-md px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button 
        className="px-6 py-3 bg-blue-600 rounded-r-lg font-semibold hover:bg-blue-700"
        onClick={handleSearch}
        >
          Search
        </button>

      </div>
       <p className="text-center mt-6 text-gray-400">
        You are searching for: {searchTerm}
         
      </p>
       <div className="max-w-6xl mx-auto px-4 mt-10">

       <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  {movies.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movie={movie}
    />
  ))}

</div>

</div>
    </div>
  )
}

export default App