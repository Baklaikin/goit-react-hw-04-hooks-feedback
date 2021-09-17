import s from "components/Notification/Notification.module.css";
import PropTypes from "prop-types";

function Notification({ message }) {
  return <h2 className={s.negativeTitle}>{message}</h2>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
