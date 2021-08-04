import React from 'react';
import './NewsBox.css';

//  NewsList에서 api 호출로 받아온 list들을 box에 다다다다 넣음
function NewsBox({ news }) {
  return (
    <div className="post">
      <div style={{display:'flex', flexDirection: 'row'}}>
        <h2 style={{marginRight:20}}>{news.title}</h2>
        <h3 style={{marginTop:25}}>신뢰도 : {news.reliability}%</h3>
      </div>
      <h>{news.content}</h>
      
    </div>
  )
}

export default NewsBox
