import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function getUserBookings() {
  try {
    console.log(`Inside getUserBookings`);
    const { data } = await axios.post(
      `${import.meta.env.VITE_BOOKING_SERVICE}/bookings`,
      {},
      { withCredentials: true }
    );
    console.log(`DATA ${data}`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

function useGetUserBookings() {
  return useMutation({
    mutationFn: getUserBookings,
    onError: (err) => {
      console.log(err);
      throw new Error(err.message);
    },
  });
}

export default useGetUserBookings;
