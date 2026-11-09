import MovieCard from "./MovieCard.jsx";

function MovieList() {
  return (
    <section>
      <h2> הסרטים שלנו</h2>
      <MovieCard
        title="Inception"
        year={2010}
        rating={8.8}
        available={true}
        popular={true}
        duration={120}
      />
      <MovieCard
        title="Toy Story"
        year={1995}
        rating={8.3}
        available={false}
        popular={false}
        duration={110}
      />
      <MovieCard
        title="Parasite"
        year={2019}
        rating={8.5}
        available={true}
        popular={false}
        duration={100}
      />
      <MovieCard
        title="Up"
        year={2009}
        rating={8.2}
        available={true}
        popular={false}
        duration={150}
      />
    </section>
  );
}

export default MovieList;