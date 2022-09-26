import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContaxt from "./contaxt/FeedbackContaxt";

export default function FeedbackItem({ item, handleDelete }) {
  const { editFeedback } = useContext(FeedbackContaxt);

  const handleClick = () => {
    handleDelete(item.id);
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button className="close" onClick={handleClick}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
