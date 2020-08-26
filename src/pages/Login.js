import React, {useState} from 'react';
import '../styles/Auth.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormField from "../components/FormField";
import {useHistory} from "react-router";

const Login = ()=> {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    // const [isPasswordVisible, setPasswordVisibility] = useState(false)
    const history = useHistory();

    function  handleSubmit(e){
        e.preventDefault();
        console.log(`submitted input ${JSON.stringify(user)}`);
        history.push('/view-events');
    }

    function handleInputChange(event){
        const {name, value} = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Header/>
            <p>Rejoin Your Tech Circles</p>
            <div className='form-split'>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <FormField
                            htmlfor='email' label='Email' id='email'
                            name='email' placeholder='Your email Address'
                            type='email' handleChange={handleInputChange}
                        />
                        <br/>
                        <FormField
                            htmlfor='password' label='Password' id='email'
                            name='password' placeholder='Your Password'
                            type='password' handleChange={handleInputChange}
                        />
                        <br/>
                        <button className='form-button' type='submit'>Login</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );

}

export default Login;