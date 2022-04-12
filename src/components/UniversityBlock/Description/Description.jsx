import PropTypes from 'prop-types';

const Description = ({ descriptions }) => {
    return (
        <>
        <p>{descriptions}</p>
        </>
    );
}; 

Description.propTypes = {
    descriptions: PropTypes.string.isRequired,
};

export default Description;