import React from 'react'
import m from "./FindFriens.module.css";
import photoUser from "../../assets/images/user.png";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalCountPage / props.countOnPage)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>Find Friends
        <div>{pages.map(el => {
            return <span onClick={() => {
                props.onChangedPage(el)
            }} className={props.currentPage == el && m.activePage + ' ' + m.page || m.page}> {el}</span>
        })}

        </div>
        {props.state.map(u => <div key={u.id}>

            <div className={m.item}>
                <div className={m.block__photo}><img src={u.photos.large == null ? photoUser : u.photos.large}
                                                     className={m.photo}/>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
                <div>
                    <div><h3>{u.name}</h3></div>
                    <div>{u.status}</div>
                </div>

            </div>
        </div>)}

    </div>

}
export default Users