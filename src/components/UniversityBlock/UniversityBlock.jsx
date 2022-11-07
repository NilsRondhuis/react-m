import PropTypes from "prop-types";
import Paper from "../common/Paper/Paper";
import Card from "./Card/Card";

const UniversityBlock = ({ name, desc }) => {
  return (
    <div>
      <Paper>
        <Card name={name} />
      </Paper>
      <Paper>
        <p>{desc}</p>
      </Paper>
    </div>
  );
};

UniversityBlock.propTypes = {
  desc: PropTypes.string.isRequired,
};

export default UniversityBlock;
