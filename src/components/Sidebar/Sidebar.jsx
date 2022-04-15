import './Sidebar.css';
import Navigation from "../Navigation/Navigation";

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="Sidebar-decor"></div>
            <button type='button' className='Sidebar-btn'></button>
            <Navigation/>
        </div>
    );
};

export default Sidebar;