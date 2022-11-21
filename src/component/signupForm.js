const SignupForm = ({
  signup,
  username,
  handleUsernameChange,
  firstName,
  handleFirstNameChange,
  lastName,
  handleLastNameChange,
  password,
  handlePasswordChange,
  signupErrors,
}) => {
  return (
    <form onSubmit={signup}>
      <div>Username: <input onChange={handleUsernameChange} value={username} /></div>
      <div>First name: <input onChange={handleFirstNameChange} value={firstName} /></div>
      <div>Last name: <input onChange={handleLastNameChange} value={lastName} /></div>
      <div>Password: <input onChange={handlePasswordChange} value={password} type="password" /></div>
      <div><button type="submit">register</button></div>
      <div>{signupErrors.map((error, i) =>  <p key={i}>{error}</p> )}</div>
    </form>)
};
export default SignupForm;
