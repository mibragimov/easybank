import { NavItem } from 'reactstrap';
import styled from 'styled-components';

export const StyledNavItem = styled(NavItem)`
  position: relative;
  transition: all 0.2s;

  &:hover::after {
    content: '';
    display: block;
    width: 82%;
    height: 5px;
    background-image: linear-gradient(
      to right,
      hsl(136, 65%, 51%),
      hsl(192, 70%, 51%)
    );
    position: absolute;
    bottom: -1.15rem;
    left: 0;
    transform: translateX(7px);
  }
`;
