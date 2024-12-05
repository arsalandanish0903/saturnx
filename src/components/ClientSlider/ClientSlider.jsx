import React from 'react';
import './ClientSlider.css';

function ClientSlider() {
  const logos = [
    '/msme.png', // Replace these paths with your actual logo paths
    '/Indian_Railway_Logo.png',
    '/mgiri.png',
    '/udyami.jpg',
    '/ruralhaat.png',
    '/maabhawani.png',
    '/myartbucket.jpg',
    '/shrikrupa.png',
    '/samruddhibank.jpg',
    '/supreme.png',
    '/maxrelief.png',
    '/hirankers.png',
    '/mds.png',
    '/shreeradhemangalam.png',
    '/shubhads.png',
  ];

  return (
    <div className="logo-container sm:py-16">
      <h1 className='sm:mb-24 text-white text-center text-6xl font-bold'>Our Clients</h1>
      <div className="logo-scroller">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo"
          />
        ))}
        {/* Repeat logos for smooth looping */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Duplicate Logo ${index + 1}`}
            className="logo"
          />
        ))}
      </div>
    </div>
  );
}

export default ClientSlider;
