import React from 'react';
import m from './Post.module.css'

const Post = (props) => {
    return (
    <div className = {m.post}>
      <img src='https://sun9-10.userapi.com/c638320/v638320921/504bc/A-GirlzJ1VA.jpg' />
      {props.message}
      <div>
        <span>Like {props.likecounts}</span>
      </div>
    </div>)
    
  
}
export default Post