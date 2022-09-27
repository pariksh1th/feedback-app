import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContaxt from "./contaxt/FeedbackContaxt";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, setFeedback, isLoding } = useContext(FeedbackContaxt);

  if (!isLoding && (!feedback || feedback.length === 0)) {
    return <h3>No Feedback</h3>;
  }

  const handleDelete = async (id) => {
    await fetch(`feedback/${id}`, { method: "DELETE" });
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return isLoding ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, ind) => (
          <motion.div
            key={ind}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FeedbackItem key={ind} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
