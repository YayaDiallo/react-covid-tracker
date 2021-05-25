import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViruses } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Wrapper>
      <h1>
        <FontAwesomeIcon icon={faViruses} /> Covid-19 tracker
      </h1>
      <p>
        API by{' '}
        <a href='https://covid19api.com' rel='noreferrer' target='_blank'>
          covid19api.com
        </a>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1e40af;
  color: #fff;

  h1 {
    text-transform: capitalize;
    margin-bottom: 0;
    padding: 0;
  }

  a {
    color: #93c6fd;
    text-decoration: none;
  }
`;

export default Header;
