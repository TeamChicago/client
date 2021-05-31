import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import NewsBox from './NewsBox.jsx'

import { getNewsList } from "../actions/newsList"

// API 호출로 news 가져와서 NewsBox 에 넣어서 가져와 map()
// {news.map(news => (<NewsBox title = {title} content={content}>))}...
// 다다다 넣은걸 몇개씩 호출해서 화면에 띄워줌 스크롤과 함께
function NewsList(props) {
  // feed test를 위한 news 예시
  // api 로 대체되어야함
  const news = [
    {
      id: 1,
      title: 'Blockchain',
      content: 'The shooting led hundreds of people to gather in front of the Brooklyn Center Police Department headquarters on Sunday night. Police fired tear gas, projectiles, and flash-bang grenades at protesters, as captured by pictures and videos tweeted from the scene. Later, at around 11:30 p.m., police declared the protests "unlawful" and threatened to arrest anyone who remained, Minnesota Public Radio News reported. Minnesota Department of Public Safety Commissioner John Harrington claimed on Monday morning that about 20 businesses were looted.',
      reliability: 45.3
    },
    {
      id: 2,
      title: 'Tesla',
      content: 'Earlier in the day, hundreds had congregated at the scene of Wright’s death. Police officers arrived in riot gear, according to Minneapolis Star Tribune reporter Kim Hyatt. Some protesters smashed police car windshields, and a police officer shot a man with a rubber bullet, Hyatt tweeted.',
      reliability: 70.2
    },
    {
      id: 3,
      title: 'Gamestop',
      content: 'Wright’s girlfriend was reportedly in the car at the time of the shooting. Brooklyn Center police said that a female passenger in the car was treated for injuries at a local hospital.',
      reliability: 12
    },
    {
      id: 4,
      title: 'Heungmin Son',
      content: 'Derek Chauvin, the officer who killed Floyd, has been on trial for murder since early March. When the trial began government buildings in Minneapolis were surrounded by barricades and fences, and authorities called in thousands of police officers and National Guard members.',
      reliability: 97.4
    },
  ];

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getNewsList());
  //   return () => { };
  // });
  const clickevent = () => {
    dispatch(getNewsList());
  };

  return (
    <div style={{flexDirection:'column' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <button onClick={clickevent}>API 호출 test</button>
      {news.map(news => (
        <NewsBox news={news} key={news.id} />
      ))}
    </div>
  );
}

export default NewsList
