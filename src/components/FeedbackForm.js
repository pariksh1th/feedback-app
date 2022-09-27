import Card from "./shared/Card";
import Button from "./shared/Button";
import { useContext, useEffect, useState } from "react";
import Rating from "./Rating";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    };

    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      const res = await fetch("/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      const data = await res.json();
      setFeedback((feedbacks) => [data, ...feedbacks]);
    }

    setText("");
    setDisabled(true);
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
