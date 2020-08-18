import styled from 'styled-components';
import { Card, CardLink } from 'reactstrap';

export const StyledCard = styled(Card)`
  border: none;
  height: 28rem;

  img {
    width: 255px;
    height: 170px;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
    }

    margin-bottom: 2rem;
  }
`;

export const StyledCardLink = styled(CardLink)`
  &:hover {
    color: hsl(192, 70%, 51%);
  }
`;
