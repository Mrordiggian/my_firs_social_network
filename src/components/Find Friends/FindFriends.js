import React from 'react';
import m from './FindFriens.module.css'
const FindFriends = (props) => {
    debugger
if (props.state.length == 0) {
    props.setUsers(
        [{id: 0, folowed: true, photo: 'https://pbs.twimg.com/media/DZn9GrXWAAIbJGq.jpg:large', FullName: 'Arnold Shvarcneger', status: 'I`ll future Front-end', location:{city: 'Minsk', country: 'Belarus'}},
        {id: 1, folowed: false, photo: 'https://pbs.twimg.com/media/DZn9GrXWAAIbJGq.jpg:large', FullName: 'Arnold Shvarcneger', status: 'I`ll future Front-end', location:{city: 'Minsk', country: 'Belarus'}},
        {id: 2, folowed: false, photo: 'https://pbs.twimg.com/media/DZn9GrXWAAIbJGq.jpg:large', FullName: 'Arnold Shvarcneger', status: 'I`ll future Front-end', location:{city: 'Minsk', country: 'Belarus'}}])
}
debugger
    return (
        <div>Find Friends
            {props.state.map(u => <div key={u.id}>

                <div className={m.item}>
                    <div className={m.block__photo}><img src={u.photo} className={m.photo}/>
                        {u.folowed ?
                            <button onClick={() => {props.unfollow(u.id)}} >Unfollow</button> :
                            <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                    <div>
                        <div><h3>{u.FullName}</h3></div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            </div>)}

        </div>
    )
}
export default FindFriends