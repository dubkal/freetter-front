import React from 'react';
import { useEffect, useState } from 'react';
import homeService from './service/home';
import authService from './service/auth';
import RegisterForm from './component/registerForm';
import './App.css';

const App = () => {
  const [helloString, setHelloString] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

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

  const register = (event) => {
    event.preventDefault();
    authService.register({
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="app">
      <header className="header">
        <h1> {helloString}</h1>
      </header>
      <RegisterForm
        register={register}
        username={username}
        handleUsernameChange={handleUsernameChange}
        firstName={firstName}
        handleFirstNameChange={handleFirstNameChange}
        lastName={lastName}
        handleLastNameChange={handleLastNameChange}
        password={password}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
}

export default App;
