import './PostNews.css';
import React, { useState } from "react";

function PostNews() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const handleTitleInputChanges = (e) => {
    setTitleValue(e.target.value);
    console.log(titleValue);
  }

  const handleContentInputChanges = (e) => {
    setContentValue(e.target.value);
  }

 

  return (
    <div className="PostNews">
      <h1>News Posting</h1>
      <div>
        <input className="title-input"
          type='text'
          value={titleValue}
          onChange = {handleTitleInputChanges}
          placeholder='제목' />
      </div>
      <div className='form-wrapper'>
        <textarea className="news-area"
          value={contentValue}
          onChange ={handleContentInputChanges}
          placeholder='내용'></textarea>
      </div>
      <button className="submit-button" onClick=""> 뉴스 게시하기 </button>
    </div>
  );
}

export default PostNews;
