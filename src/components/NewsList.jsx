import React from 'react';
import NewsBox from './NewsBox.jsx'

// API 호출로 news 가져와서 NewsBox 에 넣어서 가져와 map()
// {news.map(news => (<NewsBox title = {title} content={content}>))}...
// 다다다 넣은걸 몇개씩 호출해서 화면에 띄워줌 스크롤과 함께
function NewsList(props){
    // feed test를 위한 news 예시
    // api 로 대체되어야함
    const news = [
        {
            id: 1,
            title: 'Blockchain',
            content: 'What is BitCoin',
        },
        {
            id: 2,
            title: 'Tesla',
            content: 'Jonbu is answer',
        },
        {
            id: 3,
            title: 'Gamestop',
            content: 'Gamestop stock',
        },
    ];

    return(
        <div>
        {news.map(news =>(
            <NewsBox news={news} key={news.id}/>
        ))}
        </div>
    );
}

export default NewsList
