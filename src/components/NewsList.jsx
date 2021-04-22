import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import NewsBox from './NewsBox.jsx'

import { API_URL } from "../constants"
import axios from 'axios';


// API 호출로 news 가져와서 NewsBox 에 넣어서 가져와 map()
// {news.map(news => (<NewsBox title = {title} content={content}>))}...
// 다다다 넣은걸 몇개씩 호출해서 화면에 띄워줌 스크롤과 함께
function NewsList(props) {
  const [newsList, setNewsList] = useState({
    results: [],
  })

  const getNewsList = async () => {
    return await axios
      .get(`${API_URL}/news`)
      .then((res) => {
        const result = res.data;
        setNewsList({
          result,
        })
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setNewsList({});
      });
  }

  // useEffect(() => {
  //   getNewsList();
  //   console.log(newsList);
  // },[]);

  const clickevent = () => {
    getNewsList();
    console.log(newsList);
  };

  return (
    <div>
      <button onClick={clickevent}>API 호출 test</button>
      {/* {newsList.results.map((news) => (
        <NewsBox news={news} key={news.id} />
      ))} */}
      <div>
        {newsList.results} 
      </div>
    </div>
  );
}

export default NewsList
