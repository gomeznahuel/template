import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
