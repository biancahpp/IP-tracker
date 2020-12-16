import { React, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Maps from './components/Maps/Maps';
import apiDisplayInfo from './services/apiClient';

function App() {
  const [details, setDetails] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [userIP, setUserIP] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [userState, setUserState] = useState(null);
  const [timeZone, setTimeZone] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [userISP, setUserISP] = useState(null);
  const [userCountry, setUserCountry] = useState(null);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setDetails(response);
      console.log(response.ip);
      setLatitude(details.location.lat);
      setLongitude(details.location.lng);
      setUserIP(details.ip);
      setUserCity(details.location.city);
      setTimeZone(details.location.timezone);
      setPostalCode(details.location.postalCode);
      setUserState(details.location.region);
      setUserISP(details.isp);
      setUserCountry(details.location.country);
    });
  }, []);
  return (
    <div className="App">
      {details ? (
        <Header
          details={details}
          ip={userIP}
          city={userCity}
          state={userState}
          country={userCountry}
          postalCode={postalCode}
          timezone={timeZone}
          isp={userISP}
        />
      )
        : <div> loading</div>}
      {latitude ? (
        <Maps
          details={details}
          latitude={latitude}
          longitude={longitude}
        />
      ) : <div>Loading</div>}

    </div>
  );
}

export default App;
