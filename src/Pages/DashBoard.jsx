import { useNavigate, Navigate } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import useAuthenticate from '../services/auth';
import { useEffect, useState } from 'react';
import DashBoardPage from './DashBoardPage';

function DashBoard() {
  const { isSuccess, error, isPending, data } = useAuthenticate();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const navigate = useNavigate();
  console.log(isAuthenticated);

  useEffect(() => {
    console.log('Authentication state:');
    console.log('isPending:', isPending);
    console.log('isSuccess:', isSuccess);
    console.log('Error:', error);

    if (!isPending && !isSuccess) {
      setisAuthenticated(false);
      navigate('/login');
    } else if (!isPending && isSuccess) {
      setisAuthenticated(true);
      console.log('Auth made true');
      console.log(data);
      // console.log(data.user_metadata);
    }
  }, [isPending, isSuccess, error]);

  return (
    <>
      {isAuthenticated ? (
        <DashBoardPage name={data.name} userId={data.id} />
      ) : null}
    </>
  );
}

export default DashBoard;
