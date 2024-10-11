import { useEffect, useRef, useState } from 'react';
import useGetUserBookings from '../services/userbookings';
import BookingsGrid from '../Components/BookingsGrid';

function BookingsPage() {
  // const { state } = useLocation();
  const { mutate, isPending, isSuccess, data } = useGetUserBookings();
  const [bookingData, setBookingData] = useState({});
  const bookingTourNames = useRef([]);
  const bookingTourImages = useRef([]);
  const bookingTourDates = useRef([]);

  useEffect(() => {
    mutate();
  }, [mutate]);
  useEffect(() => {
    if (isSuccess) {
      setBookingData(data);
    }
    console.log(`PEnDING ${isPending}`);
  }, [isPending, isSuccess, data]);
  useEffect(() => {
    if (isSuccess) {
      bookingTourDates.current = data.bookings.map(
        (booking) => booking.bookingDate
      );
      bookingTourNames.current = data.tours.tours.map((tourBooking) =>
        tourBooking.map((tour) => tour.category)
      );
      bookingTourImages.current = data.tours.tours.map((tourBooking) =>
        tourBooking.map((tour) => tour.imageCover)
      );

      console.log(`After is Sucess`);
      console.log(bookingTourDates);
    }
  }, [isSuccess, data]);
  return (
    <BookingsGrid
      bookings={{
        bookingTourNames: bookingTourNames.current,
        bookingTourImages: bookingTourImages.current,
        bookingTourDates: bookingTourDates.current,
      }}
    />
  );
}

export default BookingsPage;
