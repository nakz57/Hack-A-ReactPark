const AllRating = ({ ratings }) => {
  let avarageRating = 0
  if (ratings) {
    const allrating = ratings.map((rating) => rating.rating)
    const sum = allrating.reduce((accumulator, val) => {
      return accumulator + val
    }, 0)
    avarageRating = Math.round(sum / allrating.length)
  }

  return (
    <div>
      <h3>Reviews:</h3>
      {ratings ? (
        ratings.map((rating) => (
          <div key={rating._id}>
            <h4>{rating.rating}</h4>
            <h3>{rating.content}</h3>
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
