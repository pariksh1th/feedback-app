import FeedbackData from "../data/feedbackData";

const { createContext, useState } = require("react");

const FeedbackContaxt = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updateFeedback) => {
    console.log(id, updateFeedback);
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateFeedback } : item
      )
    );
  };

  return (
    <FeedbackContaxt.Provider
      value={{
        feedback,
        feedbackEdit,
        setFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContaxt.Provider>
  );
};

export default FeedbackContaxt;
