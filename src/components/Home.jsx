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
          <h2>프로젝트 설명</h2>
          <h4></h4>
          <h4>올라오는 뉴스 게시글에 가짜 뉴스를 판별 하는 프로젝트</h4>
          <h3 style={{marginTop: 200}}>개발진</h3>
          <h4> 신한솔 | 장동혁 | 황세호 </h4>
        </div>
      </div>
  )
}

export default Home;
