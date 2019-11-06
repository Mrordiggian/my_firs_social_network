import React, {useState} from 'react';
import m from './MyPost.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/Validators/Validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";

let maxLength100 = maxLengthCreator(100)

const Mypost = React.memo(({posts, photo, fullName, addPost}) => {
    const [editMpde, setEditMode] = useState(false)
    let PostsElements = [...posts].reverse().map(p =>
        <Post key={p.id}
              message={p.message}
              likeCounts = {p.likecounts}
              photo = {photo}
              fullName = {fullName}
        />)
    let addNewPost = (dataForm) => {
        addPost(dataForm.newPost)
        setEditMode(false)
    }

    return <div>
        <div className={m.postForm + ' block'}>
            {!editMpde && <NewPost setEditMode={setEditMode}/>}
            {editMpde && <ReduxPostForm setEditMode={setEditMode} onSubmit={addNewPost}/>}
        </div>
        {PostsElements}
    </div>
})
export default Mypost

const NewPost = ({setEditMode}) => {
    return <div onClick={()=>{setEditMode(true)}} className={m.newPost }>
        <span >What`s new?</span>
    </div>
}
const PostForm = ({setEditMode, handleSubmit}) => {
    return <form onSubmit={handleSubmit} >
        <Field autoFocus={true} name={'newPost'} validate={[required, maxLength100]} placeholder='Enter your message...'  component={Textarea}/>
        <div>
            <button>Post</button>
        </div>
    </form>
}

const ReduxPostForm = reduxForm({form: 'addNewPost'})(PostForm)