import React from 'react'
import {Paginator} from "../../common/Paginator/Paginator";
import User from "./User";
import m from "./FindFriens.module.css";

let Users = ({countOnPage, currentPage, onChangedPage, totalCountPage, ...props}) => {
    return <div>

        {props.state.map(u => <User user={u}
                                    key={u.id}
                                    inProgress={props.inProgress}
                                    follow={props.follow}
                                    unfollow={props.unfollow}/>)}
        <div className={m.paginator}>
            <Paginator countOnPage={countOnPage}
                      currentPage={currentPage}
                      onChangedPage={onChangedPage}
                      totalCountPage={totalCountPage}
                      portionSize="5"
        /></div>
    </div>

}
export default Users