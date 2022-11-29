import { useState, useEffect } from "react"
import userService from "../service/user"

const User = () => {
  const [all, setAll] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    userService.getPublicContent()
      .then((response) => {
        setAll(response.message);
      });
    userService.getUsername()
      .then((response) => {
        setUsername(response.message);
      });
    userService.getUser()
      .then((response) => {
        setUser(response);
      });
  }, []);

  const drawUserDetails = () => {
    if (user != null)
      return (
        <div>
          <ul>
            <li>{user.username}</li>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
          </ul>
        </div>
      );

  }

  return (
    <div>
      <p>this should say all: {all}</p>
      <p>Welcome: {username}</p>
      {drawUserDetails()}
    </div>
  )
}
export default User;
