const AllRating = ({ ratings }) => {
  return (
    <div>
      <h3>Reviews: </h3>
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
