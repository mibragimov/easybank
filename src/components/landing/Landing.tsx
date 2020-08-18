import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { CustomButton } from '../button/CustomButton';
import { CustomCard } from '../card/CustomCard';
import {
  StyledSectionIntro,
  StyledImage,
  StyledImageDiv,
  StyledSectionMiddle,
  StyledSectionCards,
} from './Landing.styles';
import { content, articles } from '../../static/data';

function Landing() {
  return (
    <React.Fragment>
      <StyledSectionIntro className="bg-color-light-gray">
        <Container>
          <Row>
            <Col lg className="order-1 order-md-0 ">
              <div className="text-center text-md-left">
                <h3 className="display-4 display-md-3">
                  Next generation digital banking
                </h3>
                <p className="text-muted mw-75 ">
                  Take your financial life online. Your Easybank account will be
                  a one-stop-shop for spending, saving, budgeting, investing,
                  and much more.
                </p>
                <CustomButton>Request Invite</CustomButton>
              </div>
            </Col>
            <Col lg className="order-0 order-md-1">
              <StyledImageDiv>
                <StyledImage />
              </StyledImageDiv>
            </Col>
          </Row>
        </Container>
      </StyledSectionIntro>
      <StyledSectionMiddle>
        <Container className="text-center text-md-left">
          <div className="mb-5">
            <h4 className="display-4 mb-3">Why choose Easybank?</h4>
            <p className="text-muted  pb-3">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <Row>
            {content.map((item, idx) => {
              return (
                <Col lg key={idx}>
                  <div>
                    <img src={item.icon} alt="icon" className="mb-5" />

                    <h5 className="mb-3">{item.title}</h5>
                    <p className="text-muted">{item.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </StyledSectionMiddle>
      <StyledSectionCards>
        <Container>
          <h4 className="display-4 mb-5 text-center text-md-left">
            Latest Articles
          </h4>
          <Row>
            {articles.map((article, idx) => {
              return (
                <Col lg key={idx}>
                  <CustomCard article={article} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </StyledSectionCards>
    </React.Fragment>
  );
}

export { Landing };
