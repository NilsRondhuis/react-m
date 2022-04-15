import PropTypes from 'prop-types';
import iconAdd from '../../images/icons/add.png';
import s from './Btn.module.css';

const Btn = ({ text }) => {
    return (
        <button type="button" className={s.btn}>
            <span className={s.img}><img src={iconAdd} alt="Add" /></span>
            {text}
        </button>
    );
};

Btn.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Btn;
