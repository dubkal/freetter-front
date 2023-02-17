import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../service/auth';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if(user != null){
      navigate("/");
    }
  }, [navigate]);

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
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          console.log("401 Unauthorized");
          setLoginErrors(["Wrong username and/or password"]);
          setUsername("");
          setPassword("");
        }
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
