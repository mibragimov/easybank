import { Button } from 'reactstrap';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  background-image: linear-gradient(
    to right,
    hsl(136, 65%, 51%),
    hsl(192, 70%, 51%)
  );
  padding: 0.55rem 1.5rem;
  border-radius: 100px;
  border: none;

  &:hover {
    opacity: 0.7;
    border: none;
  }
`;
