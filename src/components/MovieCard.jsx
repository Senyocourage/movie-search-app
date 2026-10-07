function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">

        <h2 className="text-xl font-bold">
          {movie.Title}
        </h2>

        <p className="text-gray-400 mt-2">
          {movie.Year}
        </p>

      </div>

    </div>
  )
}

export default MovieCard