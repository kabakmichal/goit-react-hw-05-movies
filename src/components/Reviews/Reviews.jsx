import { useParams } from "react-router-dom";
import { useReviews } from "../../utils/hooks/useReviews";
import { Loader } from "../../components/Loader";

export const Reviews = () => {
  const { movieId } = useParams();
  const { reviews } = useReviews(movieId);

  if (!reviews) return <Loader />;
  if (reviews.length === 0)
    return (
      <div>
        <p>We don't have any reviews for this movie</p>
      </div>
    );

  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.author}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
