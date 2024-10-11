import style from './Bookings.module.css';
import moment from 'moment';

function BookingCard({ category, img }) {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <img src={img} alt='' className={style.imgTour} />
        <div className={style.tourContainer}>{category}</div>
      </div>
    </div>
  );
}
function Bookings({ booking, date }) {
  const { categories, imageCovers } = booking;
  const formattedDatetime = moment(date).format('DD/MM/YYYY hh:mm A');
  return (
    <div className={style.booking}>
      {categories.map((category, index) => (
        <BookingCard category={category} img={imageCovers[index]} />
      ))}
      <div className={style.bookingDate}>Booked On: {formattedDatetime}</div>
    </div>
  );
}

export default Bookings;
