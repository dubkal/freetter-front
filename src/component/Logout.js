import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../service/auth';

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    authService.logout();
    navigate("/");

  }, [navigate]);

  return (
    <>
    </>
  )
}
export default Logout;
