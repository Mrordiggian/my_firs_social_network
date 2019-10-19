import React from 'react';
import m from './MyPost.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../common/Validators/Validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";

let maxLength20 = maxLengthCreator(20)

const Mypost = (props) => {

    let PostsElements = props.state.posts.map(p => <Post message={p.message} likecounts={p.likecounts}/>)
    let addPost = (dataForm) => {
        props.addPost(dataForm.newPost)
    }


    return <div>
        <div>My post</div>
        <ReduxPostForm onSubmit={addPost}/>
        {PostsElements}

    </div>
}
export default Mypost

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field  name={'newPost'} validate={[required, maxLength20]} placeholder='Enter your message...' cols="30" rows="3" component={Textarea} />
        <div>
            <button>Send message</button>
        </div>
    </form>
}

const ReduxPostForm = reduxForm({form: 'addNewPost'})(PostForm)