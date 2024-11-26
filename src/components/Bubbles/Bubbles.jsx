import React from 'react'
import './Bubbles.css'
function Bubbles() {
  return (
    <div id="background-wrap">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`bubble x${i + 1}`}></div>
      ))}
    </div>
  );
}

export default Bubbles;