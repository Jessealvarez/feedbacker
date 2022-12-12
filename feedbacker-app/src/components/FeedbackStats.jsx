import { useContext } from "react";
import FeedbackContext from "../context/FeedBackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  //function to get average of reviews
  //the 0 is the initial value of the accumulator
  //the acc (0) gets added to the ratings
  //then it all gets divided by the length to get the average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  // console.log(average);
  //average will always only have ONE decimal by removing extra zeros
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      {/*if average is not a number, show a 0. else show average   */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
