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
          <h4>tesseract-ocr을 통해 이력서에서 텍스트 추출하고 인재추천을 해주는 시스템을 개발하였습니다</h4>
          <h4>추가적인 설명~~~~~~</h4>
          <h3 style={{marginTop: 200}}>개발진</h3>
          <h4> 신한솔 | 장동혁 | 황세호 </h4>
        </div>
      </div>
  )
}

export default Home;
