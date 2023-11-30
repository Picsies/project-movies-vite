export const MovieImage = ({imageSize, imageUrl}) => {
  const url = `https://image.tmdb.org/t/p/${imageSize}${imageUrl}`

  return (
    <div>
      <img className="movie-img" src={url}></img>
    </div>
  )
}
