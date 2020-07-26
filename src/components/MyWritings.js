import React from 'react';
import styled from 'styled-components';
import { SubPageContainer } from '../styles';
import { device } from '../device';
import imgNyc1 from '../images/nyc-1.jpg';
import imgBos1 from '../images/bos-1.jpg';
import imgNeu from '../images/neu.jpg';
import imgTaipei from '../images/taipei.jpg';

class MyWritings extends React.Component {

  render() {
    return (
      <SubPageContainer>
        <TitleContainer>
          <BorderImage src={imgNyc1} />
          <BorderImage src={imgBos1} />
          <BorderImage src={imgNeu} />
          <BorderImage src={imgTaipei} />
          <h1>My Writings</h1>
        </TitleContainer>
        <ContentContainer>
        </ContentContainer>
      </SubPageContainer>
    )
  }
};

const TitleContainer = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const ContentContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const BorderImage = styled.img`
  width: 25%;
  max-height: 100px;
  padding: 0px;
  object-fit: cover;
  @media ${device.tablet} {
    max-height: 80px;
  }
  @media ${device.mobile} {
    max-height: 50px;
  }
`;

export default MyWritings;