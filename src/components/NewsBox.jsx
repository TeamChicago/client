import React from 'react';
import './NewsBox.css';

//  NewsList에서 api 호출로 받아온 list들을 box에 다다다다 넣음
function NewsBox({ news }) {
  return (
    <div className="post">
      <h2>{news.title}</h2>
      <b>{news.content}</b>
      <b>{news.reliability}</b>
    </div>
  )
}

export default NewsBox
