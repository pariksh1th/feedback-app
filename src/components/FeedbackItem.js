import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

export default function FeedbackItem({ item, handleDelete }) {
  const handleClick = () => {
    handleDelete(item.id);
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button className="close" onClick={handleClick}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
