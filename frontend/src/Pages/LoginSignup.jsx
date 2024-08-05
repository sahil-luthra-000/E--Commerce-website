import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const login = async () => {
    console.log("Login Function Executed", formData);
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });
      const data = await response.json();
      
      if (response.ok) { // Check if response status is OK (200-299)
        if (data.success) {
          localStorage.setItem('auth-token', data.token);
          window.location.replace("/");
        } else {
          console.log('Login error:', data.errors || 'Unknown error');
        }
      } else {
        // Handle HTTP errors
        console.error('Login request failed with status:', response.status);
        console.log('Error details:', data.errors || 'Unknown error');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const signup = async () => {
    console.log("Signup Function Executed", formData);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });
      const data = await response.json();
      
      if (response.ok) { // Check if response status is OK (200-299)
        if (data.success) {
          localStorage.setItem('auth-token', data.token);
          window.location.replace("/");
        } else {
          console.log('Signup error:', data.errors || 'Unknown error');
        }
      } else {
        // Handle HTTP errors
        console.error('Signup request failed with status:', response.status);
        console.log('Error details:', data.errors || 'Unknown error');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state === "Login" ? "Login" : "Sign Up"}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && 
            <input 
              name='username' 
              value={formData.username} 
              onChange={changeHandler} 
              type="text" 
              placeholder='Your Name' 
            />
          }
          <input 
            name='email' 
            value={formData.email} 
            onChange={changeHandler} 
            type="email" 
            placeholder='Email Address' 
          />
          <input 
            name='password' 
            value={formData.password} 
            onChange={changeHandler} 
            type="password" 
            placeholder='Password' 
          />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ? (
          <p className='loginsignup-login'>
            Already have an account? 
            <span onClick={() => setState("Login")}> Login Here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Don't have an account? 
            <span onClick={() => setState("Sign Up")}> Sign Up Here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" id='agree' />
          <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy</label>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
