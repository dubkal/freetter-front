import { useState, useEffect } from "react"
import userService from "../service/user"

const User = () => {
  const [all, setAll] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    userService.getPublicContent()
      .then((response) => {
        setAll(response.message);
      });
    userService.getGreetings()
      .then((response) => {
        setGreeting(response.message);
      });
  }, []);

  return (
    <div>
      <p>this should say all: {all}</p>
      <p>this should say greeting: {greeting}</p>
    </div>
  )
}
export default User;
