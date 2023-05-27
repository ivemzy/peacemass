import React from 'react';
import Slider from './Homepage/Slider';
import About1 from './Homepage/About1';
import Services2 from './Homepage/Services2';
import Client1 from './Homepage/Client1';


const Index = () => {
  return (
    <div>
        <Slider/>
        <About1/>
        <Services2/>
        <Client1/>
    </div>
  );
};

export default React.memo(Index);
