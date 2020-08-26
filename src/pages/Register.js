import React, {useState} from 'react';
import Header from "../components/Header";
import FormField from "../components/FormField";
import Footer from "../components/Footer";
import {useHistory} from 'react-router';

const Register = () => {
    const [fields, setFields] = useState({
        fullName: '',
        email: '',
        password: '',
        // companyName: '',
        // designation: ''
    });

    const [profile, setProfile] = useState('');

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`submitted input ${JSON.stringify(fields)}`);
        history.push('/view-events')
    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        setFields(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleProfileChange(event) {
        setProfile(event.target.value);
        console.log(`sel profile:\t ${profile}`);
    }

    return (
        <>
            <Header/>
            <p>Create Your Account With Us</p>
            <div className='form-split'>
                <div className="form-content">
                    <form onSubmit={handleSubmit}>
                        <FormField
                            htmlfor='fullName' label='Full Name or Company Name' id='fullName'
                            name='fullName' placeholder='Full Name or Company Name'
                            type='text' handleChange={handleInputChange}
                        />
                        <br/>
                        <FormField
                            htmlfor='email' label='Email' id='email'
                            name='email' placeholder='Your email Address'
                            type='email' handleChange={handleInputChange}
                        />
                        <br/>
                        <FormField
                            htmlfor='password' label='Password' id='password'
                            name='password' placeholder='Your Password'
                            type='password' handleChange={handleInputChange}
                        />
                        <br/>

                        {/*<input*/}
                        {/*    type="radio"*/}
                        {/*    value="Speaker"*/}
                        {/*    checked={profile === 'Speaker'}*/}
                        {/*    onChange={handleProfileChange}*/}
                        {/*/>*/}
                        {/*<label htmlFor="speaker">Speaker</label>*/}

                        {/*<input*/}
                        {/*    type="radio"*/}
                        {/*    value="Company"*/}
                        {/*    checked={profile === 'Company'}*/}
                        {/*    onChange={handleProfileChange}*/}
                        {/*/>*/}
                        {/*<label htmlFor="company">Company</label>*/}

                        {/*<input*/}
                        {/*    type="radio"*/}
                        {/*    value="Guest"*/}
                        {/*    checked={profile === 'Guest'}*/}
                        {/*    onChange={handleProfileChange}*/}
                        {/*/>*/}
                        {/*<label htmlFor="guest">Guest</label>*/}

                        {/*<br/>*/}

                        <button className='form-button' type='submit'>Register</button>

                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Register;