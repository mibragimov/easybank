import styled from 'styled-components';

import mockups from '../../images/image-mockups.png';
import bgMobile from '../../images/bg-intro-mobile.svg';
import bgDesktop from '../../images/bg-intro-desktop.svg';

export const StyledSectionIntro = styled.section`
  padding: 11rem 0;
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;
  background-position: top -16.5rem right -28em;
  /* background-size: cover; */
  position: relative;

  @media only screen and (max-width: 768px) {
    background-image: url(${bgMobile});
    background-position: top right;
    background-size: contain;
  }
`;

export const StyledImage = styled.img.attrs({
  src: mockups,
  alt: 'mockups',
})`
  width: 46rem;
  position: absolute;
  top: -18.5rem;
  right: -17.5rem;
  z-index: 100;

  @media only screen and (max-width: 1400px) {
    width: 44rem;
    right: -15.5rem;
  }
  @media only screen and (max-width: 1300px) {
    width: 43rem;
    right: -14.5rem;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    right: -14.5rem;
    position: relative;
    right: 0;
  }
`;

export const StyledImageDiv = styled.div`
  height: 11rem;
`;

export const StyledSectionMiddle = styled.section`
  padding: 6rem 0;
  background-color: hsl(220, 16%, 96%);
`;

export const StyledSectionCards = styled.section`
  padding: 6rem 0;
  background-color: hsl(0, 0%, 98%);
`;
