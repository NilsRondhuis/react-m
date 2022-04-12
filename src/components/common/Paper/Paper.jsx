import PropTypes from 'prop-types';

const Paper = ({ children }) => {
    return (
        <div className="paper">
            {children}
        </div>
    );
};

Paper.propTypes = {
    children: PropTypes.node,
};

export default Paper;