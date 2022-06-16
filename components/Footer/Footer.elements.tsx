import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  place-content: center;
  width: 100%;
  padding: 1em 0;

  p {
    font-size: 1.6rem;
    text-align: center;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.8rem;
    }
  }
`;
