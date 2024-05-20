import css from "../Feedback/Feedback.module.css";

export default function Feedback({
  feedback: { good, neutral, bad },
  total,
  positive,
}) {
  return (
    <>
      <div className={css.container}>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positive}%</li>
        </ul>
      </div>
    </>
  );
}
