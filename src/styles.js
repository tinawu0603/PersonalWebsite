import styled from 'styled-components';
import {device} from './device';
import './index.css';

const BGPurple = styled.div`
  background: #E6E6FA;
  color: #696969;
`;

const BGBlue = styled.div`
  background: #B0C4DE;
  color: #708090;
  
`;

const FullPageContainer = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  @media ${device.laptop} {
    padding: 80px 30px;
  }
  @media ${device.tablet} {
    padding: 70px 20px;
  }
  @media ${device.mobile} {
    padding: 20px;
  }
`;

const SubPageContainer = styled(FullPageContainer)`
  padding: 30px;
  padding-bottom: 50px;
  @media ${device.tablet} {
    padding: 20px;
  }
  @media ${device.mobile} {
    padding: 20px;
  }
`;

export {
  BGPurple,
  BGBlue,
  FullPageContainer,
  SubPageContainer
};