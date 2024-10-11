import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function signup({ email, name, password, confirmPassword }) {
  const signUpURL = `${import.meta.env.VITE_USER_SERVICE}/users`;
  try {
    const data = await axios.post(signUpURL, {
      userEmail: email,
      userPassword: password,
      confirmPassword,
      userName: name,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

function useSignUp() {
  return useMutation({
    mutationFn: signup,
    onError: (error) => {
      console.log(error.message);
      throw new Error(error.message);
    },
  });
}

export default useSignUp;
