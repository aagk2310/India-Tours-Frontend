import Cookies from 'js-cookie';

// Function to get the access token from cookies
export const getAuthToken = () => {
  const token = Cookies.get('accessToken');
  console.log('Retrieved token:', token); // Debugging line to ensure token is retrieved
  return token;
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  return getAuthToken() !== undefined; // Updated to handle `undefined` as well
};

// Function to delete the access token cookie
export const deleteAuthToken = () => {
  try {
    Cookies.remove('accessToken', {
      path: '/',
      domain: '.development-project-tours.xyz',
      secure: true,
      sameSite: 'None',
      httpOnly: false,
    });
    console.log('Access token cookie deleted');
  } catch (error) {
    console.error('Failed to delete access token cookie:', error);
  }
};
