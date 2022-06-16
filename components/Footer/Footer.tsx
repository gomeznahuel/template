import {FooterContainer} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        © {new Date().getFullYear()}, Hebras is a web application that allows
        you to shop for your favorite products in a fast and easy way.
      </p>
    </FooterContainer>
  );
};

export default Footer;
