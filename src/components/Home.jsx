import React from 'react';
import imagen1 from '../assets/11.webp';

function Home() {
  return (
    <>
      <div
        style={{
          minHeight: '40vh',
        }}
      >
        <img className="imgPrincipal" src={imagen1} alt={imagen1} />
      </div>
    </>
  );
}

export default Home;
