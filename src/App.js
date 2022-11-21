import React from 'react';
import { useEffect, useState } from 'react';
import homeService from './service/home';
import authService from './service/auth';
import SignupForm from './component/signupForm';
import './App.css';

const App = () => {
  const [helloString, setHelloString] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [signupErrors, setSignupErrors] = useState([]);

  useEffect(() => {
    homeService.getHomeString()
      .then((response) => {
        setHelloString(response);
      })
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const signup = (event) => {
    event.preventDefault();
    authService.signup({
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
    })
      .then((response) => {
        console.log(response)
        setSignupErrors([]);
      })
      .catch((error) => {
        console.log(error.response)
        setSignupErrors(error.response.data)
      });
  }

  return (
    <div className="app">
      <header className="header">
        <h1> {helloString}</h1>
      </header>
      <SignupForm
        signup={signup}
        username={username}
        handleUsernameChange={handleUsernameChange}
        firstName={firstName}
        handleFirstNameChange={handleFirstNameChange}
        lastName={lastName}
        handleLastNameChange={handleLastNameChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
        signupErrors={signupErrors}
      />
    </div>
  );
}

export default App;
