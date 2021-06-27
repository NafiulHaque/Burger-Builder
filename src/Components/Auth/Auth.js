import { Formik } from "formik";
import { Component } from "react";


class Auth extends Component {
    render() {
        return (
            <div>
                <Formik initialValues={
                    {
                        email: "",
                        password: "",
                        passwordConfirm: "",
                    }
                }
                    onSubmit={
                        (values) => {
                            console.log(values);
                        }
                    }>

                    {({ values, handleChange, handleSubmit }) => (<div>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="email"
                                placeholder="Enter Your Email"
                                className="form-control mb-2"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <input
                                name="password"
                                placeholder="Enter Your Password"
                                className="form-control mb-2"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <input
                                name="passwordConfirm"
                                placeholder="Confirm Password"
                                className="form-control mb-2"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                            />
                            <button type="submit" className="btn btn-success">Sign Up</button>
                        </form>
                    </div>
                    )
                    }

                </Formik>
            </div >
        )
    }
}


export default Auth;