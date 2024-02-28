const AllRating = ({ ratings }) => {
  let avarageRating = 0
  if (ratings) {
    const allrating = ratings.map((rating) => rating.rating)
    console.log('allrating', allrating)
    const sum = allrating.reduce((accumulator, val) => {
      return accumulator + val
    }, 0)
    avarageRating = Math.round(sum / allrating.length)
  }
  return (
    <div className="all-rating-container">
      {avarageRating ? (
        <h3>
          Reviews: {Array(avarageRating).fill(<span className="star"></span>)}
        </h3>
      ) : null}
      {ratings ? (
        ratings.map((rating) => (
          <div className="rating-box" key={rating._id}>
            <h4>
              {' '}
              {Array(rating.rating).fill(<span className="star"></span>)}
            </h4>
            <h3> Contant: {rating.content}</h3>
            {/* <img src={review.pic} alt={review.title} /> */}
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  )
}
export default AllRating
