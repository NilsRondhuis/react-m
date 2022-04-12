import PropTypes from 'prop-types';

const Section = ({ text, icon, children }) => {
    return (
        <section>
            <h2><span><img src={icon} alt="Icon Title" /></span> {text}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    children: PropTypes.node,
};

export default Section;