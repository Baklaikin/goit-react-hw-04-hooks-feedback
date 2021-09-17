import s from "components/FeedbackOptions/FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.wrapper}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          className={s.button}
          onClick={(e) => {
            const item = e.target.name.toLowerCase();
            onLeaveFeedback(item);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
};
