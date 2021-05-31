import './PostNews.css';
import React, { useState } from "react";
import{ Component } from 'react';
import NewsPostService from "../services/newsPostService"
class PostNews extends Component {
  constructor(props){
    super(props)
    this.state = {
      titleValue : '',
      contentValue : '',
      writerValue: '',
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    NewsPostService.postNews(this.state)
    this.props.history.push({
      pathname: '/',
    })
  }

  render() {
    const {titleValue, contentValue, writerValue} = this.state
    return (
      <div className="PostNews">
        <h1>News Posting</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <input className="title-input"
              type='text'
              name= "titleValue"
              value={titleValue}
              onChange = {this.changeHandler}
              placeholder='제목' />
          </div>
          <div>
            <input className="title-input"
              type='text'
              name= "writerValue"
              value={writerValue}
              onChange = {this.changeHandler}
              placeholder='작성자' />
          </div>
          <div className='form-wrapper'>
            <textarea className="news-area"
              name= "contentValue"
              value={contentValue}
              onChange ={this.changeHandler}
              placeholder='내용'></textarea>
          </div>
          <button className="submit-button" type="submit"> 뉴스 게시하기 </button>
        </form>
    </div>
    );
  }
}

export default PostNews;


