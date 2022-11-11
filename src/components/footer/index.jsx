import { getCurrentYear } from "../../helpers";
import { FooterWrapper } from "../../stylesheet";

export const Footer = () => {
  return (
    <FooterWrapper>
      <span>{getCurrentYear()} &copy; All rights reserved.</span>
    </FooterWrapper>
  );
};
