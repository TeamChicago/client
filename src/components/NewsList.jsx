import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import NewsBox from './NewsBox.jsx'

import { API_URL } from "../constants"
import axios from 'axios';


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
          results: [...res.data],
        })
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setNewsList({});
      });
  }

  useEffect(() => {
    getNewsList();
    console.log(newsList);
  },[]);

  // const clickevent = () => {
  //   getNewsList();
  //   console.log(newsList);
  // };

  return (
    <div>
      {/* <button onClick={clickevent}>API 호출 test</button> */}
      {newsList.results.map((news) => (
        <NewsBox news={news} key={news.id} />
      ))}
    </div>
  );
}

export default NewsList
