import { navConfig } from "../../data/navigation";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
    return (
        <nav>
           {navConfig.map(({name}, i) => (
               <NavItem key={i} name={name}/>
           ))}
        </nav>
    );
};

export default Navigation;