function MovieCard({title,year,rating,popular,available,duration}) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      {popular &&<p>בחירת הצוות </p>}
      {available &&<p> זמין לצפייה</p>}
      <p>אורך הסרט בדקות: {duration}</p>
    </article>
  );
}

export default MovieCard;