import React from 'react'
import styles from './users.module.css'
import { NavLink } from 'react-router-dom'
import Pagination from '../common/Pagination/Pagination'

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, portionSize, ...props}) => {
    return <div>

        <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={portionSize}/>

        {
            props.users.map(u => <div key={u.id} className={styles.user}>
                <div className={styles.subscription}>
                    <NavLink to={'profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : "https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png"} className={styles.userPhoto}></img>
                    </NavLink>
                    {u.followed 
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
                <div className={styles.personalData}>
                    <div className={styles.leftData}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={styles.rightData}>
                        <div>{(u.location != null ? u.location.country : "Ukraine") + ', ' + (u.location != null ? u.location.city : "Kiev")}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users