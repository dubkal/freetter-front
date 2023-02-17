import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import userService from "../service/user"
import UserDetails from "./UserDetails"
import UserDetailsEdit from "./UserDetailsEdit"
const User = () => {

  const [all, setAll] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userService.getPublicContent()
      .then((response) => {
        setAll(response.message);
      });

    userService.getUsername()
      .then((response) => {
        setUsername(response.message);
      })
      .catch((error) => {
        navigate("/login");
      });

    userService.getUser()
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        navigate("/login");
      });
  }, [navigate]);

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  }

  return (
    <div>
      <p>Server status: {all}</p>
      <p>Welcome: {username} </p>
      <button onClick={toggleEdit} > Edit user details </button>
      {showEdit ? <UserDetailsEdit user={user} /> : <UserDetails user={user} />}
    </div>
  )
}

export default User;
