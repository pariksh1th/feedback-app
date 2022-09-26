import Card from "./shared/Card";
import Button from "./shared/Button";
import { useContext, useEffect, useState } from "react";
import Rating from "./Rating";
// import { v4 as uuidv4 } from "uuid";
import FeedbackContaxt from "./contaxt/FeedbackContaxt";

function FeedbackForm() {
  const { setFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContaxt);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [rating, setSelected] = useState(10);

  useEffect(() => {
    setDisabled(false);
    setText(feedbackEdit.item.text);
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    const { value } = e.target;

    if (value === "") {
      setMessage(null);
      setDisabled(true);
    } else if (value !== "" && value.trim().length < 10) {
      setMessage("Message should be of at least 10 charactor");
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }

    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = uuidv4();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
        // id,
      };
      // if (feedbackEdit.edit) {
      //   updateFeedback(feedbackEdit.item.id, newFeedback);
      // } else {
      //   setFeedback((feedbacks) => [newFeedback, ...feedbacks]);
      // }
      setFeedback((feedbacks) => [newFeedback, ...feedbacks]);

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate our service? </h2>
        <Rating selected={rating} setSelected={(rate) => setSelected(rate)} />
        <div className="input-group">
          <input type="text" name="" value={text} onChange={handleChange} />
          <Button type="submit" disabled={disabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
