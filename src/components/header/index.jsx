import { HeaderWrapper } from "../../stylesheet";
import { Logo } from "../logo";
import { Navigation } from "../../helpers";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navigation />
    </HeaderWrapper>
  );
};
