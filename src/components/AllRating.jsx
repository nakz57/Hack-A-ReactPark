const AllRating = ({ ratings }) => {
  let averageRating = 0
  if (ratings) {
    const allrating = ratings.map((rating) => rating.rating)
    console.log('allrating', allrating)
    const sum = allrating.reduce((accumulator, val) => {
      return accumulator + val
    }, 0)
    averageRating = Math.round(sum / allrating.length)
  }

  return (
    <div>
      <h3>Reviews: </h3>
      <h3>Reviews: {Array(averageRating).fill(<span>:star:</span>)}</h3>
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
