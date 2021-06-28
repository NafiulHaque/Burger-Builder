import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../../redux/authActionCreator";



const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}
class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (<Redirect to="/" />)
    }
}

export default connect(null, mapDispatchToProps)(Logout);