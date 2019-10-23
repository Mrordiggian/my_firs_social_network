import React from 'react';
import m from './MyPost.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/Validators/Validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";

let maxLength100 = maxLengthCreator(100)

const Mypost = React.memo((props) => {
    let PostsElements = [...props.state.posts].reverse().map(p =>
        <Post key ={p.id}
              message={p.message}
              likecounts={p.likecounts}
              profileInfo ={props.state.profileInfo}
        />)
    let addPost = (dataForm) => {
        props.addPost(dataForm.newPost)
    }

    return <div>
        <div>My post</div>
        <ReduxPostForm onSubmit={addPost}/>
        {PostsElements}

    </div>
})
export default Mypost

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field  name={'newPost'} validate={[required, maxLength100]} placeholder='Enter your message...' cols="30" rows="3" component={Textarea} />
        <div>
            <button>Send message</button>
        </div>
    </form>
}

const ReduxPostForm = reduxForm({form: 'addNewPost'})(PostForm)