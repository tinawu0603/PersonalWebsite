import React from 'react';
import styled from 'styled-components';
import { FullPageContainer } from '../styles';
import ProfilePic from '../images/Profile.png';
import twitterIcon from '../images/twitter.svg';
import linkedInIcon from '../images/linkedin.svg';
import githubIcon from '../images/github.svg';

class Home extends React.Component {

  render() {
    return (
      <FullPageContainer>
        <TitleContainer>
          <ProfilePicture />
          <h1>Hi!</h1>
        </TitleContainer>
        <ContentContainer>
          <p><strong>
            Hello, I'm Tina! &#128513;
          </strong></p>
          <p>
            I just graduated from Northeastern University in Boston &#128105;&#127995;&#8205;&#127891; and am currently a <strong>DevOps Engineer at <a title="mark43" href="https://www.mark43.com/">Mark43</a></strong>.
          </p>
          <p>
            When I am not geeking out about all things automation &#129302;, security &#128272;, and cloud infrastructure &#9925;, you will most likely find me sipping tea &#127861;, playing Stardew Valley &#128105;&#8205;&#127806;, or learning to play the guitar &#127928;.
          </p>
        </ContentContainer>
        <MediaContainer>
          <a href="https://twitter.com/hacker_wu">
            <Twitter />  
          </a>
          <a href="https://www.linkedin.com/in/tinawu0603/">
            <LinkedIn />
          </a>
          <a href="https://github.com/tinawu0603">
            <Github />
          </a>
        </MediaContainer>
      </FullPageContainer>
    )
  }
};

const TitleContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ContentContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const MediaContainer = styled.div`
  max-width: 500px
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  display: flex;
  justify-content: center; 
`;

const MediaIcon = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  width: 50px;
`;

const Twitter = styled(MediaIcon)`
  content: url(${twitterIcon});
`;

const LinkedIn = styled(MediaIcon)`
  content: url(${linkedInIcon});
`;

const Github = styled(MediaIcon)`
  content: url(${githubIcon});
`;

const ProfilePicture = styled.img`
  content: url(${ProfilePic});
  width: 150px;
  height: 150px;
  padding: 0px;
`;

export default Home;