import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

//import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';
import {useAuth} from "../context/auth";

function Signup() {
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postSignup() {

        axios.post("https://www.somePlace.com/auth/signup", {
            email,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    return (
        <Card>
            <Form>
                <Input
                    type="email"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder="password again"
                />
                <Button onClick={postSignup()}> >Sign Up</Button>
            </Form>
            <Link to="/login">Already have an account?</Link>
        </Card>
    );
}

export default Signup;