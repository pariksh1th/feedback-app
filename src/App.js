import { useState } from "react";
import FeedbackData from "./components/data/feedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm setFeedback={setFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList setFeedback={setFeedback} feedback={feedback} />
      </div>
    </>
  );
}
