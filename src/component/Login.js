import { useState } from 'react';
import authService from '../service/auth';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const login = (event) => {
    event.preventDefault();
    authService.login({ username: username, password: password, })
      .then((response) => {
        console.log(response)
        setLoginErrors([]);
      })
      .catch((error) => {
        console.log(error.response)
        setLoginErrors(error.response.data)
      });
  }

  return (
    <form onSubmit={login}>
      <div>Username: <input onChange={handleUsernameChange} value={username} /></div>
      <div>Password: <input onChange={handlePasswordChange} value={password} type="password" /></div>
      <div><button type="submit">Login</button></div>
      <div>{loginErrors.map((error, i) => <p key={i}>{error}</p>)}</div>
    </form>
  )
};
export default Login;
