import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { Store } from '../../context/Store';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { setToken } = useContext(Store);
  const url = "https://juice-app-backend.onrender.com";
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value= event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if(currentState=="Login"){
      newUrl+='/api/user/login'
    }else{
      newUrl+='/api/user/register'

    }

      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
       

        setShowLogin(false);
        console.log("Login/Register Success:", response.data);
      } else {
        alert(response.data.message || "Authentication failed.");
      }
    } 
 

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.close} alt="Close" />
        </div>

        <div className="login-inputs">
          {currentState === "Sign Up" && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Your email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Password'
            required
          />
        </div>

        <button type='submit'>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-condition">
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currentState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
