const RegisterForm = ({
  register,
  username,
  handleUsernameChange,
  firstName,
  handleFirstNameChange,
  lastName,
  handleLastNameChange,
  password,
  handlePasswordChange,
}) => {
  return (
    <form onSubmit={register}>
      <div>Username: <input onChange={handleUsernameChange} value={username} /></div>
      <div>First name: <input onChange={handleFirstNameChange} value={firstName} /></div>
      <div>Last name: <input onChange={handleLastNameChange} value={lastName} /></div>
      <div>Password: <input onChange={handlePasswordChange} value={password} /></div>
      <div><button type="submit">register</button></div>
    </form>)
};
export default RegisterForm;
