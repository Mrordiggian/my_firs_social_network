import style from "./Paginator.module.css";
import React from "react";


export const Paginator = ({totalCountPage, countOnPage, onChangedPage, currentPage}) => {
    let pageCount = Math.ceil(totalCountPage / countOnPage)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(el => {
            return <span onClick={() => {onChangedPage(el)}}
                         className={currentPage == el && style.activePage + ' ' + style.page || style.page}> {el}</span>
        })}

    </div>
}