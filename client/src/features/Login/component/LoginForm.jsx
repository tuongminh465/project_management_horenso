import React from 'react'
import './LoginForm.scss'
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function LoginForm() {
    return (
        <div className='form'>
            <div className='form__title'>
                <span className='form__title__text'>Welcome!</span>
            </div>
            <div className='form__email-container'>
                <div className='email-textbox' 
                    style={{
                        height: 45,
                        width: 400,
                        position: "absolute",
                        left: 0,
                        top: 23,
                        borderWidth: 1,
                        borderColor: "#000000",
                        borderStyle: "solid"
                }}>
                    <input className='email-textbox__text' placeholder='Enter your email'></input>
                    <input className='email-textbox__input'></input>
                </div>
                <span className='form__email-container__label'>Email</span>
            </div>
            <div className='form__password-container'>
                <div className='password-textbox' 
                    style={{
                        height: 45,
                        width: 400,
                        position: "absolute",
                        left: 0,
                        top: 0,
                        borderWidth: 1,
                        borderColor: "#000000",
                        borderStyle: "solid"
                    }}>
                        <input className='password-textbox__text' placeholder='Enter password'></input>
                        <input className='password-textbox__input'></input>
                </div>
                <span className='form__password-container__label'>Password</span>
            </div>
            <EntypoIcon
                name="mail"
                style={{
                top: 129,
                left: 23,
                position: "absolute",
                color: "rgba(128,128,128,1)",
                fontSize: 40
                }}
            ></EntypoIcon>
            <EntypoIcon
                name="lock"
                style={{
                top: 213,
                left: 23,
                position: "absolute",
                color: "rgba(128,128,128,1)",
                fontSize: 40
            }}
            ></EntypoIcon>
            <div className='form__login-btn-container'>
                <button className='login-btn'>
                    <input className='login-btn__text' placeholder='Log In'></input>
                </button>
            </div>
            <span className='form__login-github'>Or login with Github</span>
        </div>
    )
}

export default LoginForm