import Card from "./multi/Card";
import PropTypes from "prop-types";
//for the delete icon
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedBackContext";
import { useContext } from "react";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="lightseagreen" />{" "}
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="lightseagreen" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
