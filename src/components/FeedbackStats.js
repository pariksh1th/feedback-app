function FeedbackStats({ feedback }) {
  let len = feedback.length;
  let avg = feedback.reduce((acc, fish) => (acc += fish.rating), 0) / len;
  avg = avg.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{len} Reviews</h4>
      <h4>Avrage Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats;
