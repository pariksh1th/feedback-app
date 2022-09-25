import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";

function FeedbackList({ feedback, setFeedback }) {
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
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
