import { useState, useContext, useEffect } from "react";
import Card from "./multi/Card";
import Button from "./multi/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedBackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  //disables button if review isn't enough characters
  const [btnDisabled, setBtnDisabled] = useState(true);
  //message to let user know their review needs more characters
  const [message, setMessage] = useState("");

  const [rating, setRating] = useState();

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    // ----- validation -----
    if (text === "") {
      //if there is no text entered, no message will show and user can't click button
      setBtnDisabled(true);
      setMessage(null);
      //if review has characters AND is less than 10 characters, disable button. the .trim gets rid of whitespace
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Review must be at least 10 characters!");
      setBtnDisabled(true);
    } else {
      //if there's more than 10 characters, enable button clicking!
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
        setText("");
      }
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your experience</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Leave a review..."
            value={text}
          />
          {/* can pass in a 'version here to change color -check CSS */}
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {/* message about review length for user */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
