import { NavLink } from "react-router-dom";
import { DataNavigation } from "../../helpers";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {DataNavigation.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
