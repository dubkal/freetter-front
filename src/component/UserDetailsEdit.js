import { useState } from "react";
import userService from "../service/user"

const UserDetailsEdit = ({ user }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [editErrors, setEditErrors] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  }

  const saveChanges = (event) => {
    event.preventDefault();
    userService.saveUserDetails({
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      })
    .then
  }

  if (user == null) return (<></>);
  return (
    <form onSubmit={saveChanges}>
      <div>
        <p>Username: {user.username}</p>
        <p>New username: <input onChange={handleUsernameChange} value={username} /></p>
      </div>
      <div>
        <p>Email: {user.email}</p>
        <p>New email: <input onChange={handleEmailChange} value={email} type="email" /></p>
      </div>
      <div>
        <p>First name: {user.firstName}</p>
        <p>New first name: <input onChange={handleFirstNameChange} value={firstName} /></p>
      </div>
      <div>
        <p>Last name: {user.lastName}</p>
        <p>New last name: <input onChange={handleLastNameChange} value={lastName} /></p>
      </div>
      <div>
        <p>New password: <input onChange={handlePasswordChange} value={password} type="password" /></p>
        <p>Repeat password: <input onChange={handleRepeatPasswordChange} value={repeatPassword} type="password" /></p>
      </div>
      <div>{editErrors.map((error, i) => <p key={i}>{error}</p>)}</div>
      <div><button type="submit">Save changes</button></div>
    </form>
  );
}

export default UserDetailsEdit;
