import "./Home.css";

import React from 'react';
import cbnu from '../images/cbnu.jpg'

function Home() {

  return(
      <div>
        <div className="cbnu-img">
          <img  src={cbnu} />
        </div>
        <div className="descriptions">
          <h1> 신한솔 | 장동혁 | 황세호 </h1>
        </div>
      </div>
  )
}

export default Home;
