import React from 'react'
import styles from './Auth.scss'


const Auth = (props) => {
    return (
        <div className="Auth">
            <div>{props.username}</div>
            <form
                className="Auth-form"
                style={styles}
                onSubmit={props.formik.handleSubmit}>
                <div className="Auth-form__email-block">
                    <label
                        className="Auth-form__email-label"
                        htmlFor="email"
                    >
                        email
                </label>
                    <input
                        className="Auth-form__email-input"
                        id="email"
                        name="email"
                        type="email"
                        onChange={props.formik.handleChange}
                        value={props.formik.values.email}
                    />
                </div>
                <div className="Auth-form__password-block">
                    <label
                        className="Auth-form__password-label"
                        htmlFor="password"
                    >
                        password
                </label>
                    <input
                        className="Auth-form__password-input"
                        id="password"
                        name="password"
                        type="password"
                        onChange={props.formik.handleChange}
                        value={props.formik.values.password}
                    />
                </div>
                <div className="Auth-form__submit-block">
                    <button className="Auth-form__submit-button" type="submit">Submit!</button>
                </div>
            </form>
        </div>
    );
};


export default Auth;
