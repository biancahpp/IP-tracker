/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import './styles.css';
import { FaChevronRight } from 'react-icons/fa';

export default function Header(details) {
  const [ipAddress, setIpAddress] = useState(details.details.ip);

  function findIP(e) {
    e.preventDefault();
    details.trackIP(ipAddress);
  }
  return (
    <div className="headerWrapper">
      <form onSubmit={(e) => findIP(e)}>
        <p className="title">IP Adress Tracker</p>
        <div className="inputWrapper">
          <input
            className="ipInput"
            type="text"
            placeholder="Track an IP..."
            onChange={(e) => {
              setIpAddress(e.target.value);
            }}
          />
          <button type="submit">
            <FaChevronRight className="arrowIcon" color="white" />
          </button>
        </div>
      </form>
    </div>
  );
}
