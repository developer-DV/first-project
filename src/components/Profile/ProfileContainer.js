import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, savePhoto, updateStatus } from '../../redux/profileReducer'
import { withRouter, Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userId !== this.props.match.params.userId){
            this.refreshProfile()
        }  
    }

    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>

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
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)