import s from "components/Section/Section.module.css";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
