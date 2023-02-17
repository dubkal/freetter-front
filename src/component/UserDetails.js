const UserDetails = ({ user }) => {
  if (user == null) return (<></>);
  return (
    <div>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>First name: {user.firstName}</li>
        <li>Last name: {user.lastName}</li>
      </ul>
    </div>
  );
}
export default UserDetails;
