import PropTypes from 'prop-types';
import s from './Description.module.css';

const Description = ({ descriptions }) => {
    return (
        <>
        <p className={s.text}>{descriptions}</p>
        </>
    );
}; 

Description.propTypes = {
    descriptions: PropTypes.string.isRequired,
};

export default Description;