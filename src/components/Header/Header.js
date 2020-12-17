/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import './styles.css';

export default function Header(details) {
  const [ipAddress, setIpAddress] = useState(details.details.ip);

  function findIP(e) {
    e.preventDefault();
    details.trackIP(ipAddress);
  }
  return (
    <div className="headerWrapper">
      <form onSubmit={(e) => findIP(e)}>
        <h1>IP Adress Tracker</h1>
        <input
          type="text"
          placeholder="Track an IP..."
          onChange={(e) => {
            setIpAddress(e.target.value);
          }}
        />
        <button type="submit"> Botao </button>
      </form>
      <div className="locationInfo">
        {details
          ? (
            <div>
              IP ADDRESS
              {details.details.ip}
              {' '}
              LOCATION
              {details.details.location.city}
              ,
              {details.details.location.region}
              {' '}
              {details.details.location.country}
              {' '}
              {details.details.location.postalCode}
              {' '}
              TIMEZONE
              {' '}
              {details.details.location.timezone}
              {' '}
              ISP
              {' '}
              {details.details.isp}
            </div>
          )

          : <div> Loading </div>}
      </div>
    </div>
  );
}
