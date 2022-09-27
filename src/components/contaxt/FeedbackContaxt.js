const { createContext, useState, useEffect } = require("react");

const FeedbackContaxt = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [isLoding, setIsLoding] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/feedback?_sort=id&_order=desc");
    const data = await res.json();
    setFeedback(data);
    setIsLoding(false);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = async (id, updateFeedback) => {
    const res = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateFeedback),
    });

    const data = await res.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContaxt.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoding,
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
