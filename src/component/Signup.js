import authService from '../service/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [signupErrors, setSignupErrors] = useState([]);
  const navigate = useNavigate();

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
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response)
        setSignupErrors(error.response.data)
      });
  }
  return (
    <form onSubmit={signup}>
      <div>Username: <input onChange={handleUsernameChange} value={username} /></div>
      <div>First name: <input onChange={handleFirstNameChange} value={firstName} /></div>
      <div>Last name: <input onChange={handleLastNameChange} value={lastName} /></div>
      <div>Password: <input onChange={handlePasswordChange} value={password} type="password" /></div>
      <div><button type="submit">register</button></div>
      <div>{signupErrors.map((error, i) => <p key={i}>{error}</p>)}</div>
    </form>)
};
export default Signup;
