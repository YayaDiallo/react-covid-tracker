import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CountrySelect from './CountrySelect';

const DataBoxes = ({ covidData, handleTitleCntry }) => {
  const [covidDataGlobal, setCovidDataGlobal] = useState(0);
  const [newCases, setNewCases] = useState(0);
  const [totalCases, setTotalCases] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);

  useEffect(() => {
    const getDataGlobal = async () => {
      const data = await fetchCovidData();
      setNewCases(data.NewConfirmed);
      setTotalCases(data.TotalConfirmed);
      setNewDeaths(data.NewDeaths);
      setTotalDeaths(data.TotalDeaths);

      setCovidDataGlobal(data);
    };
    getDataGlobal();
  }, []);

  const fetchCovidData = async () => {
    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();

    return data.Global;
  };

  if (!covidData) {
    return 'Loading...';
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleCountryChange = (e) => {
    if (e.target.value === '0') {
      handleTitleCntry('Global');
      setNewCases(covidDataGlobal.NewConfirmed);
      setTotalCases(covidDataGlobal.TotalConfirmed);
      setNewDeaths(covidDataGlobal.NewDeaths);
      setTotalDeaths(covidDataGlobal.TotalDeaths);
    } else {
      const newCntrySelect = covidData.Countries.find(
        (cntry) => cntry.ID === e.target.value
      );
      // Function from app.js
      handleTitleCntry(newCntrySelect.Country);

      setNewCases(newCntrySelect.NewConfirmed);
      setTotalCases(newCntrySelect.TotalConfirmed);
      setNewDeaths(newCntrySelect.NewDeaths);
      setTotalDeaths(newCntrySelect.TotalDeaths);
    }
  };

  return (
    <>
      <Wrapper>
        <div className='boxe-cases'>
          <h2>Cases</h2>
          <p>
            New : <span className='number'>{numberWithCommas(newCases)}</span>
          </p>
          <p>
            Total :{' '}
            <span className='number'>{numberWithCommas(totalCases)}</span>
          </p>
        </div>
        <div className='boxe-deaths'>
          <h2>Deaths</h2>
          <p>
            New : <span className='number'>{numberWithCommas(newDeaths)}</span>
          </p>
          <p>
            Total :{' '}
            <span className='number'>{numberWithCommas(totalDeaths)}</span>
          </p>
        </div>
      </Wrapper>
      <CountrySelect
        covidData={covidData}
        handleCountryChange={handleCountryChange}
      />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .boxe-cases {
    background: #dbeafe;
  }

  .boxe-deaths {
    background: #bfdbfe;
  }

  div {
    background-color: #fff;
    color: #333;
    border-radius: 3px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    margin: 10px;
    padding: 10px;
    width: 500px;

    @media (max-width: 768px) {
      width: 330px;
    }

    h2 {
      text-align: center;
      color: #1e3a8a;
    }

    p {
      text-align: center;
    }

    ${
      '' /* p:not(.number) {
      font-weight: bold;
    } */
    }
  }
`;

export default DataBoxes;
