import React from 'react';

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps !== this.props) {
            this.setState({ status: this.props.status })
        }
    }

    activeEditMode = () => {
        this.setState({ editMode: true })
    }

    deactiveEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value })
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode}>{this.props.status || "----"}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status} onChange={this.onStatusChange}></input>
                </div>
            }
        </>
    }
}

export default Status;