import { useEffect, useState } from 'react';
import homeService from '../service/home';

const Homepage = () => {
  const [helloString, setHelloString] = useState("");

  useEffect(() => {
    homeService.getHomeString()
      .then((response) => {
        setHelloString(response);
      })
  }, []);
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <p>This is a home paragraph</p>
      <p>{helloString}</p>
    </div>
  )
};
export default Homepage;
