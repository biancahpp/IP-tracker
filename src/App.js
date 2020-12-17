import { React, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Maps from './components/Maps/Maps';
import apiDisplayInfo from './services/apiClient';
import Info from './components/Info/Info';

function App() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    apiDisplayInfo().then((response) => {
      setDetails(response);
    });
  }, []);

  async function trackIP(ipAddress) {
    const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEO_IPIFY_TOKEN}&ipAddress=${ipAddress}`);
    return setDetails(response.data);
  }
  return (
    <div className="App">
      {details ? (
        <Header
          details={details}
          trackIP={trackIP}
        />
      ) : (
        <div> loading</div>
      )}
      {details ? (
        <Info
          className="infoComponent"
          details={details}
        />
      )
        : <div>Loading</div>}
      {details ? (
        <Maps
          details={details}
          latitude={details.location.lat}
          longitude={details.location.lng}
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
