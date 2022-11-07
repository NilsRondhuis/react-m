import PropTypes from "prop-types";
import schoolImg from "../../../images/school.png";
import { ReactComponent as DeleteBtn } from "../../../images/deleteBtn.svg";
import { ReactComponent as EditBtn } from "../../../images/editBtn.svg";

const Card = ({ name }) => {
  return (
    <div>
      <div>
        <img src={schoolImg} alt="" />
      </div>
      <p>университет</p>
      <p>{name}</p>
      <div>
        <button type="button">
          <EditBtn />
        </button>
        <button type="button">
          <DeleteBtn />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
