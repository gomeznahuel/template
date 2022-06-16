import Link from "next/link";
import { LogoContainer } from "./Logo.elements";

const Logo = ({ setShowMobileMenu }: { setShowMobileMenu: Function }) => {
  return (
    <Link href="/">
      <LogoContainer onClick={() => setShowMobileMenu(false)}>
        #hebras
      </LogoContainer>
    </Link>
  );
};

export default Logo;
