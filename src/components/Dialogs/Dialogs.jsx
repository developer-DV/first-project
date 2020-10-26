import React from 'react';
import DialogsCss from './dialogs.module.css'
import { NavLink} from 'react-router-dom';
import AddMessageContainer from './AddMessage/AddMessageContainer';

const DialogItem = (props) => {
    return (
        <div className={DialogsCss.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={DialogsCss.dialogActive}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={DialogsCss.message}>
            <div className={DialogsCss.avatar}>
                <img src="https://c7.hotpng.com/preview/972/909/268/computer-icons-smiley-emoticon-youtube-wink-smiley-face.jpg" alt="avatar_person" />
                <p className="person">Dima</p>
            </div>
            <div className={DialogsCss.messageText}>
                {props.message}
            </div>
        </div>
    );
}

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messageElements = props.state.messageData.map(mes => <Message message={mes.message} key={mes.id} />);

    return (
        <div className={DialogsCss.dialogs}>
            <div className={DialogsCss.heading}>
                <h2>Dialogs</h2>
            </div>
            <div className={DialogsCss.dialogsItems}>
                {dialogsElement}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="Roma" id="Roma" />
                <DialogItem name="Ivan" id="Ivan" />
                <DialogItem name="Denis" id="Denis" /> */}
            </div>
            <div className={DialogsCss.messages}>
                {messageElements}
                <AddMessageContainer />
            </div>
        </div>
    );
}

export default Dialogs;