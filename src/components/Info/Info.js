import React from 'react';
import './styles.css';

export default function Info(details) {
  return (
    <div className="locationInfo">
      {details
        ? (
          <div className="infoWrapper">
            <div className="ipWrapper">
              <p>IP ADDRESS</p>
              {details.details.ip}
            </div>
            <div className="locationWrapper">
              <p>LOCATION</p>
              {details.details.location.city}
              ,
              {' '}
              {details.details.location.region}
              {' '}
              {details.details.location.country}
              {' '}
              {details.details.location.postalCode}
            </div>
            <div className="timezoneWrapper">
              <p>TIMEZONE</p>
              {details.details.location.timezone}
            </div>
            <div className="ispWrapper">
              <p>ISP</p>
              {details.details.isp}
            </div>
          </div>
        )

        : <div> Loading </div>}
    </div>
  );
}
