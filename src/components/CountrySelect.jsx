import React from 'react';
import styled from 'styled-components';

const CountrySelect = ({ covidData, handleCountryChange }) => {
  return (
    <Wrapper>
      <select name='country' onChange={(e) => handleCountryChange(e)}>
        <option value='0'>Select Country</option>
        {covidData.Countries.map((cntry) => (
          <option key={cntry.ID} value={cntry.ID}>
            {cntry.Country}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    width: 1060px;
    padding: 10px;
    margin: 20px;
  }
`;

export default CountrySelect;
