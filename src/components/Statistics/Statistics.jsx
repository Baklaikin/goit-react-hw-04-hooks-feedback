import s from "components/Statistics/Statistics.module.css";
import Notification from "components/Notification/Notification";
import PropTypes from "prop-types";

function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  const renderFeedback = () => {
    return (
      <>
        <p className={s.paragraph}>Good: {good}</p>
        <p className={s.paragraph}>Neutral: {neutral}</p>
        <p className={s.paragraph}>Bad: {bad}</p>
        <p className={s.paragraph}>Total: {total}</p>
        <p className={s.paragraph}>Positive feedback: {positiveFeedback}%</p>
      </>
    );
  };
  return (
    <div className={s.container}>
      <div className={s.values}>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          renderFeedback()
        )}
      </div>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
