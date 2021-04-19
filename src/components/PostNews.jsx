import React from 'react';
import './PostNews.css';


function PostNews() {

  return (
    <div className="PostNews">
      <h1>News Posting</h1>
      <div>
        <input className="title-input" type='text' placeholder='제목' />
      </div>
      <div className='form-wrapper'>
        <textarea className="news-area" placeholder='내용'></textarea>
      </div>
      <button className="submit-button"> 뉴스 게시하기 </button>
    </div>
  );
}

export default PostNews;
