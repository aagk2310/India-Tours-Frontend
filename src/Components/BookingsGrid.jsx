import Bookings from './Bookings';
import style from './BookingsGrid.module.css';

function BookingsGrid({ bookings }) {
  const { bookingTourNames, bookingTourImages, bookingTourDates } = bookings;
  console.log('Inside bookings grid');
  console.log(`BOOKINGTOurDATE ${bookingTourDates}`);
  return (
    <div className={style.container}>
      {bookingTourDates.map((date, index) => (
        <Bookings
          key={index}
          booking={{
            imageCovers: bookingTourImages[index],
            categories: bookingTourNames[index],
          }}
          date={date}
        />
      ))}
    </div>
  );
}

export default BookingsGrid;
