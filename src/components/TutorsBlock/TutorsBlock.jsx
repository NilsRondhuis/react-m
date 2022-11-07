import PropTypes from "prop-types";
import Paper from "../common/Paper/Paper";
import Tutor from "./Tutor/Tutor";

const TutorsBlock = ({ tutors = [] }) => {
  return (
    <Paper>
      <ul>
        {tutors.map((tutors) => (
          <li key={tutors.phone}>
            <Tutor {...tutors} />
          </li>
        ))}
      </ul>
    </Paper>
  );
};

TutorsBlock.propTypes = {
  tutors: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
    })
  ).isRequired,
};

export default TutorsBlock;
