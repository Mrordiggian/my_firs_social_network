import React, {useState} from 'react';
import m from './MyPost.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/Validators/Validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";



const Mypost = React.memo(({posts, photo, fullName, addPost, deletePost}) => {
    const [editMode, setEditMode] = useState(false)
    let PostsElements = posts.map(p =>
        <Post key={p.id}
              id={p.id}
              body={p.body}
              likeCounts = {p.likecounts}
              photo = {photo}
              fullName = {fullName}
              deletePost = {deletePost}
        />)
    let addNewPost = (dataForm) => {
        addPost(dataForm.newPost)
        setEditMode(false)
    }
    return <div>
        <div className={m.postForm + ' block'}>
            {!editMode && <NewPost setEditMode={setEditMode}/>}
            {editMode && <ReduxPostForm setEditMode={setEditMode} onSubmit={addNewPost}/>}
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
let maxLength100 = maxLengthCreator(100)

const PostForm = ({handleSubmit, setEditMode}) => {
    return <form onSubmit={handleSubmit}>
            <Field autoFocus={true} name={'newPost'} validate={[required, maxLength100]}
                   placeholder='Enter your message...' component={Textarea}/>
            <div>
                <button>Post</button>
                <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
        </form>
}


const ReduxPostForm = reduxForm({form: 'addNewPost'})(PostForm)