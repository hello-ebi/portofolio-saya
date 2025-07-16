import React from 'react';
import ebilaptop from '../assets/images/ebikomputr.gif';

function Background() {
  return (
    <>
      <div className="w-1/2 bg-black"></div>
      <div
        className="w-1/2"
        style={{
          backgroundImage: `url(${ebilaptop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    
    </>
  );
}

export default Background;