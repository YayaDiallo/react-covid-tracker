import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DataTitle from './components/DataTitle';
import DataBoxes from './components/DataBoxes';

function App() {
  const [covidData, setCovidData] = useState('');
  const [dataDate, setDataDate] = useState('');
  const [dataTitleCountry, setDataTitleCountry] = useState('Global');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCovidData();

      setDataDate(data.Date);
      setCovidData(data);
    };
    getData();
  }, []);

  const fetchCovidData = async () => {
    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();
    return data;
  };

  const handleTitleCntry = (cntryTitle) => {
    setDataTitleCountry(cntryTitle);
  };

  return (
    <>
      <Header />
      <DataTitle
        dataDate={dataDate}
        covidData={covidData}
        dataTitleCountry={dataTitleCountry}
      />
      <DataBoxes covidData={covidData} handleTitleCntry={handleTitleCntry} />
    </>
  );
}

export default App;
