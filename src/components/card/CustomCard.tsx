import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

import { StyledCardLink, StyledCard } from './CustomCard.styles';

interface Props {
  article: {
    image: any;
    title: string;
    author: string;
    text: string;
  };
}

function CustomCard({ article }: Props): JSX.Element {
  return (
    <StyledCard>
      <CardImg top width="100%" src={article.image} alt="Card image cap" />
      <CardBody>
        <CardText>
          <small className="text-muted">By {article.author}</small>
        </CardText>
        <StyledCardLink href="#">
          <CardTitle>{article.title}</CardTitle>
        </StyledCardLink>
        <CardText className="text-muted">{article.text}</CardText>
      </CardBody>
    </StyledCard>
  );
}

export { CustomCard };
