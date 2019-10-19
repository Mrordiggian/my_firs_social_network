import React from 'react';
import {updateProfileStatus} from "../../../../Redux/reducerProfile";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {

        this.setState({
                editMode: true
            }
        )
    }
    deActivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
        this.props.updateProfileStatus(this.state.status)
    }
    changeStatus = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState(
                {status: this.props.status}
            )
        }
    }

    render() {
        return <div>
            {!this.state.editMode && <div>
                <span  onDoubleClick={this.activateEditMode}>{this.props.status || 'Set status' }</span>
            </div>}
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} onChange={this.changeStatus}/>
            </div>
            }

        </div>
    }
}

export default ProfileStatus