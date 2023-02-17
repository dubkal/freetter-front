import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user != null) {
      setUserLoggedIn(true);
    }
  }, [])

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!userLoggedIn ?
          <>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
          </> : null
        }
        <li><Link to="/user">User</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  )
}
export default Navigation;
