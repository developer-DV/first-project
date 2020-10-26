import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, updateStatus } from '../../redux/profileReducer'
import { withRouter, Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}/>
        
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)