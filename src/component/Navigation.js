import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  )
}
export default Navigation;
