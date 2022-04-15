import './Navigation.scss';
import { navConfig } from "../../data/navigation";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
    return (
        <nav className='Navigation'>
           {navConfig.map(({name, icon}, i) => (
               <NavItem key={i} name={name} icon={icon}/>
           ))}
        </nav>
    );
};

export default Navigation;