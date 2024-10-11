import { useQuery } from '@tanstack/react-query';
import { getAuthToken, isAuthenticated } from './jwtCookie';
import { decodeJwt } from 'jose';

function decodeToken(token) {
  try {
    const decoded = decodeJwt(token);
    console.log('Decoded token:', decoded);
    return decoded;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}

async function getUser() {
  if (!isAuthenticated()) {
    throw new Error('Session does not exist');
  } else {
    const token = getAuthToken();
    console.log('Token');
    console.log(token);
    if (!token) throw new Error('Something went wrong');
    const decodedToken = decodeToken(token);
    console.log('Decoded token:', decodedToken);
    if (decodedToken) return decodedToken;
    else throw new Error('Something went wrong');
  }
}

function useAuthenticate() {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });
}

export default useAuthenticate;
