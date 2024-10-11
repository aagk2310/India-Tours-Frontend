import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// Function to handle the login request
async function login({ email, password }) {
  console.log('Inside login');
  console.log(email, password);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_AUTH_SERVICE}/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true, // Include cookies in the request
      }
    );
    return response.data; // Return the data from the response
  } catch (error) {
    throw new Error(error.message);
  }
}

// Custom hook to use the login mutation
function useLogin() {
  return useMutation({
    mutationFn: login,
    onError: (err) => {
      console.log(err);
      throw new Error(err.message);
    },
  });
}

export default useLogin;
