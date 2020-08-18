import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: hsl(233, 26%, 24%);
  padding: 3rem 0 1rem 0;
`;

export const StyledSvg = styled.svg`
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: hsl(192, 70%, 51%);
    }
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
  li:not(:last-child) {
    margin-bottom: 0.7rem;
  }
  li a {
    color: hsl(0, 0%, 98%);
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      color: hsl(192, 70%, 51%);
    }
  }
`;
