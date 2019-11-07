import React from 'react'
import m from "./FindFriens.module.css";
import photoUser from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


const User = ({user, inProgress, unfollow, follow}) => {

    return  <div key={user.id} className={m.item}>
            <div className={m.block__photo}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.large || photoUser} className={m.photo} alt='photo'/>
                </NavLink>
                {user.followed ?
                    <button disabled={inProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>

                    : <button disabled={inProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}
                    >Follow</button>
                }
            </div>
            <div>
                <NavLink to={`/profile/${user.id}`}>
                    <div><h3>{user.name}</h3></div>
                </NavLink>
                <div style={{overflow: 'hidden'}}>{user.status}</div>
            </div>

        </div>

}
export default User