import { useState } from "react";
import { MenuContext } from "../MenuContext";

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
