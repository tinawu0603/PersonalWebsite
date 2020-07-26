import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BGBlue } from '../styles';

class Nav extends React.Component {

  render() {
    return (
      <BorderContainer>
        <BGBlue>
          <NavContainer>
          <NavLink to={`/`}>
              <h3>Home</h3>
            </NavLink>
            <NavLink to={`/about-me`}>
              <h3>About Me</h3>
            </NavLink>
            <NavLink to={`/my-projects`}>
              <h3>My Projects</h3>
            </NavLink>
            <NavLink to={`/my-writings`}>
              <h3>My Writings</h3>
            </NavLink>
          </NavContainer>
        </BGBlue>
      </BorderContainer>
    )
  }
};

const BorderContainer = styled.div`
  margin: 10px;
`;

const NavContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 5px 20px;
  &:hover {
    text-decoration: none;
    background: #708090;
    color: #B0C4DE;
  }
`;

export default Nav;