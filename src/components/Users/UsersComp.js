import React from 'react'
import styles from './users.module.css'
import axios from 'axios'

const Users = (props) => {
    
    let getUsers = () => {
        if (props.users.length === 0){  
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
                props.setUsers(response.data.items)
            } )
        }
    }
    


// if (props.users.length === 0)
//     props.setUsers([
//         {
//             id: 1, photoURL: "https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png",
//             followed: true, fullname: 'Vlad', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' }
//         },
//         {
//             id: 2, photoURL: "https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png",
//             followed: false, fullname: 'Stas', status: 'I am a boss too', location: { city: 'Kharkiv', country: 'Ukraine' }
//         },
//         {
//             id: 3, photoURL: "https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png",
//             followed: true, fullname: 'Dima', status: 'I am a student', location: { city: 'Odessa', country: 'Ukraine' }
//         },
//     ])

return (
    <div>

        <button onClick={getUsers}>Click me</button>

        {
            props.users.map(u => <div key={u.id} className={styles.user}>
                <div className={styles.subscription}>
                    <img src={u.photos.small != null ? u.photos.small : "https://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png"} className={styles.userPhoto}></img>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
)
}

export default Users