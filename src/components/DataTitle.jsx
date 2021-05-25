import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const DataTitle = ({ dataDate, dataTitleCountry }) => {
  return (
    <>
      <Wrapper>
        <h2>{dataTitleCountry}</h2>
        {dayjs(dataDate).format('DD MMMM YYYY, HH:MM:ss')}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export default DataTitle;
