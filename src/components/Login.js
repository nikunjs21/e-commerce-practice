import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React, { useContext, useRef, useState } from 'react';
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth-context";
import axios from "axios";
import { URL_SIGN_IN } from "../config/urls";
import ErrorModal from "../UI/ErrorModal";
const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const authContext = useContext(AuthContext);

    const emailRef = useRef();
    const passwordRef = useRef();

    const signIn = async (email, password) => {
        try {
            const res = await axios.post(URL_SIGN_IN, {
                email,
                password,
                returnSecureToken: true
            });
            console.log(res);
            const expirationTime = new Date(new Date().getTime() + +res.data.expiresIn * 1000);
            // console.log(expirationTime.toISOString(), res.data.idToken);
            authContext.login(res.data.idToken, expirationTime.toISOString());
        } catch (e) {
            console.log(e.message);
            setErrorMessage(e.message);
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        console.log('onSubmitHandler');
        signIn(email, pass);
        // history.push('/welcome');
    }

    const onModalDismissHandler = () => {
        setErrorMessage('');
    }

    if (errorMessage.length !== 0) {
        return <ErrorModal onDismiss={onModalDismissHandler}>{errorMessage}</ErrorModal>
    }
    return <div className={classes.formcontainer}>
        <div className={classes.login}>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link to="/register">Register</Link>
        </div>
    </div>;
}

export default Login;