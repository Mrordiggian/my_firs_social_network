import React from 'react';
import m from './MyPost.module.css'
import Post from './Post/Post';



const Mypost = (props) => {

    let PostsElements = props.state.posts.map(p => <Post message={p.message} likecounts={p.likecounts}/>)
    let onChangetext = (e) =>{
        let text = e.target.value
        props.UpdatePostText(text)
    }


    return <div>
        <div>My post</div>
        <div>
            <div><textarea
                onChange={onChangetext}
                placeholder='Bla-bla-bla'
                cols="40"
                rows="5"
                value={props.state.newtext}/></div>
            <button onClick={props.AddPost}>Add post</button>
        </div>
        {PostsElements}

    </div>
}
export default Mypost