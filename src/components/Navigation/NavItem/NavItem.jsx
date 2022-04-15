import './NavItem.scss';
import PropTypes from 'prop-types';

const NavItem = ({ name, icon }) => {
    return (
        <div className='NavItem'>
            <span className='NavItem-icon'>{icon}</span>
            <a href="/" className='NavItem-link'>{name}</a>
        </div>
    );
};

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default NavItem;