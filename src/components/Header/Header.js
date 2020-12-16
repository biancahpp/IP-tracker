import { React } from 'react';
import './styles.css';

export default function Header({
  // eslint-disable-next-line react/prop-types
  details, ip, city, state, country, postalCode, timezone, isp,
}) {
  return (
    <div className="headerWrapper">
      <form>
        <h1>IP Adress Tracker</h1>
        <input type="text" />
        <button type="button"> Botao </button>
      </form>
      <div className="locationInfo">
        {details
          ? (
            <div>
              IP ADDRESS
              {ip}
              {' '}
              LOCATION
              {city}
              ,
              {state}
              {' '}
              {country}
              {' '}
              {postalCode}
              {' '}
              TIMEZONE
              {' '}
              {timezone}
              {' '}
              ISP
              {' '}
              {isp}
            </div>
          )

          : <div> Loading </div>}
      </div>
    </div>
  );
}
