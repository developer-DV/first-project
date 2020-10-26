import React from 'react';
import { addMessageActionCreator } from '../../../redux/dialogsReducer';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (text) => {dispatch(addMessageActionCreator(text))}
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default AddMessageContainer