import NavItem from "./NavItem/NavItem";
import { navConfig } from "../../data/navigation";

const Navigation = () => {
  return (
    <nav>
      {navConfig.map(({ name }) => (
        <NavItem key={name} name={name} />
      ))}
    </nav>
  );
};

export default Navigation;
