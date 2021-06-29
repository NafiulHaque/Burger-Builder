import { Formik } from "formik";
import { Component } from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { auth } from "../../redux/authActionCreator";

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

const mapStateToProps = state => {
    return {
        authLoading: state.authLoading,
        authFailedMsg: state.authFailedMsg,
    }
}

class Auth extends Component {
    state = {
        mode: "Sign UP",
    }

    switchModeHandler = () => {
        this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
    }

    render() {
        let err = null;
        if (this.props.authFailedMsg !== null) {
            err = <Alert color="danger"> {this.props.authFailedMsg}</Alert>
        }
        let form = null;
        if (this.props.authLoading) {
            form = <Spinner />
        } else {
            form = (
                <Formik initialValues={
                    {
                        email: "",
                        password: "",
                        passwordConfirm: "",
                    }
                }
                    onSubmit={
                        (values) => {
                            this.props.auth(values.email, values.password, this.state.mode)
                        }
                    }
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';

                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 4) {
                            errors.password = 'Must be atleast 4 characters!';
                        }
                        if (this.state.mode === "Sign Up") {
                            if (!values.passwordConfirm) {
                                errors.passwordConfirm = 'Required';

                            } else if (values.password !== values.passwordConfirm) {
                                errors.passwordConfirm = 'Password field dose not match!'
                            }
                        }

                        // console.log(errors);
                        return errors;
                    }}

                >

                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{
                            border: "1px grey solid",
                            padding: "15px",
                            borderRadius: "7px",

                        }}>
                            <button style={{
                                width: "100%",
                                backgroundColor: "black",
                                color: "white"
                            }} className="btn btn-lg mb-2"
                                onClick={this.switchModeHandler}>Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="form-control mb-2"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <span style={{ color: "red" }}>{errors.email}</span>
                                <input
                                    name="password"
                                    placeholder="Enter Your Password"
                                    className="form-control mb-2"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <span style={{ color: "red" }}>{errors.password}</span>
                                {this.state.mode === "Sign Up" ? <div>
                                    <input
                                        name="passwordConfirm"
                                        placeholder="Confirm Password"
                                        className="form-control mb-2"
                                        value={values.passwordConfirm}
                                        onChange={handleChange}
                                    />
                                </div> : null}

                                <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                                <br />
                                <button type="submit" className="btn btn-success">{this.state.mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                            </form>
                        </div>
                    )
                    }

                </Formik >
            )
        }
        return (
            <div>
                {err}
                {form}
            </div >
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);