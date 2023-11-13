import { ReviewAuthor, ReviewItem, ReviewList, ReviewText } from "./MovieReview.styled";

export const MovieReview = ({ review }) => {
  const { results } = review;
    return (
    <>
      {results.length > 0 ? (
        <ReviewList>
          {results.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <ReviewAuthor>{author}</ReviewAuthor>
              <ReviewText>{content}</ReviewText>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <p>Unfortunately, there are no reviews for this movie</p>
      )}
    </>
  );
};
