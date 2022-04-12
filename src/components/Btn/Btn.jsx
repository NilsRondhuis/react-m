import PropTypes from 'prop-types';
import iconAdd from '../../images/icons/add.png';

const Btn = ({ text }) => {
    return (
        <button type="button">
            <img src={iconAdd} alt="Add" />
            {text}
        </button>
    );
};

Btn.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Btn;
