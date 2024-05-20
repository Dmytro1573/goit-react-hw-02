import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

let state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saveData = localStorage.getItem("feedback");
    return saveData ? JSON.parse(saveData) : state;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const handleReset = () => {
    setFeedback(state);
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        state={state}
        onCount={updateFeedback}
        onReset={handleReset}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          state={state}
          positive={positiveFeedback}
          feedback={feedback}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
