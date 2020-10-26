import React, { useEffect, useState } from 'react';


const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])
    
    const activeEditMode = () =>{
        setEditMode(true)
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (<>
        {!editMode &&
            <div>
                <span onDoubleClick={activeEditMode}>{props.status || "----"}</span>
            </div>
        }
        {editMode &&
            <div>
                <input autoFocus={true} value={status} onBlur={deactiveEditMode} onChange={onStatusChange} ></input>
            </div>
        }
    </>)
}

// class Status extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps !== this.props) {
//             this.setState({ status: this.props.status })
//         }
//     }

//     activeEditMode = () => {
//         this.setState({ editMode: true })
//     }

//     deactiveEditMode = () => {
//         this.setState({ editMode: false })
//         this.props.updateStatus(this.state.status)
//     }

//     onStatusChange = (e) => {
//         this.setState({ status: e.currentTarget.value })
//     }

//     render() {
//         return <>
//             {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.activeEditMode}>{this.props.status || "----"}</span>
//                 </div>
//             }
//             {this.state.editMode &&
//                 <div>
//                     <input autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status} onChange={this.onStatusChange}></input>
//                 </div>
//             }
//         </>
//     }
// }

export default StatusWithHooks;