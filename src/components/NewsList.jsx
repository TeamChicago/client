import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import NewsBox from './NewsBox.jsx'

import { API_URL } from "../constants"
import axios from 'axios';


function NewsList(props) {
  const [newsList, setNewsList] = useState({
    results: [],
  })

  /*const news = [
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
  ];*/

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


  return (
    <div style={{flexDirection:'column' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {newsList.results.map((news) => (
        <NewsBox news={news} key={news.id} />
      ))}
      {/*news.map(news => (
        <NewsBox news={news} key={news.id} />
      ))*/}
    </div>
  );
}

export default NewsList
