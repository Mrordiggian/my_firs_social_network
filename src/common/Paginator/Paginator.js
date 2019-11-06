import style from "./Paginator.module.css";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faArrowAltCircleRight, faCoffee} from "@fortawesome/free-solid-svg-icons";
import cn from 'classname'


export const Paginator = ({totalCountPage, countOnPage, onChangedPage, currentPage, portionSize = 10}) => {
    let pageCount = Math.ceil(totalCountPage / countOnPage)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftNumberPage = (portionNumber - 1) * portionSize + 1
    let rightNumberPage = portionNumber * portionSize
    return <div className={style.paginator}>
        {portionNumber > 1 && <span onClick={() => {
            setPortionNumber(--portionNumber)
            onChangedPage(--leftNumberPage)
        }} className={style.pointer}> <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg"/></span>}
        {pages.filter(p => p >= leftNumberPage && p <= rightNumberPage)
            .map(page => {
                return <span
                key={page}
                    onClick={() => {
                    onChangedPage(page)
                }}
                             className={cn(style.page, {
                                 [style.activePage]: currentPage === page
                             })
                             }> {page}</span>
            })}
        {portionNumber < portionCount && <span className={style.pointer} onClick={() => {
            onChangedPage(++rightNumberPage)
            setPortionNumber(++portionNumber)
        }}> <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg"/></span>}
    </div>
}