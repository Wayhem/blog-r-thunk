import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
 
class UserDisplay extends Component{
    componentDidMount() {
        this.props.fetchUser(this.props.id);
    }

    render(){
        const { user } = this.props;
        if (!user) {
            return null;
        }

        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = ({users}, ownProps) => {
    return { user: users.find(user => user.id === ownProps.id) };
}

export default connect(mapStateToProps, { fetchUser })(UserDisplay);