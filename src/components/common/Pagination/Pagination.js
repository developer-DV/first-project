import React, { useState } from 'react'
import styles from './Pagination.module.css'

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = pagesCount/portionSize
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage/portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.pagination}>
            <div>
            {portionNumber > 1 && <button className={styles.buttonStyle} onClick={() => setPortionNumber(portionNumber = 1)}>PREV</button>}
            {
                pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => <span className={currentPage === p ? styles.selectedPage : '' + styles.span} onClick={(e) => { onPageChanged(p) }}>{p}</span>)
            }
            {portionNumber < portionCount && <button  className={styles.buttonStyle} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
            </div> 
        </div>
    )
}

export default Pagination