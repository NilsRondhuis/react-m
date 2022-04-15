/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const sectionStyle = {
    paddingBottom: 30,
}

const Section = ({ text, icon, children }) => {
    return (
        <section css={sectionStyle}>
            <div className="header">
                <span className="icon"><img src={icon} alt="icon" /></span>
                <h2 className='heading'>{text}</h2>
            </div>
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