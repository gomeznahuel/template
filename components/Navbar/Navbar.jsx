import { useState } from "react";
import { Wrapper, Menu, MenuItem, MobileIcon } from "./Navbar.elements";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import Link from "next/link";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Wrapper>
      <Logo showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />

      <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <VscClose /> : <VscThreeBars />}
      </MobileIcon>

      <Menu open={showMobileMenu}>
        <MenuItem onClick={() => setShowMobileMenu(false)}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setShowMobileMenu(false)}>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setShowMobileMenu(false)}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={() => setShowMobileMenu(false)}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
