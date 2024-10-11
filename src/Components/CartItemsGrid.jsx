import { useLocation } from 'react-router-dom';
import style from './CartItemsGrid.module.css';
import CartItems from './CartItems';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import { ButtonSecondary } from '../StyledComponents/ButtonComponent';
import axios from 'axios';
import { useState } from 'react';
import AlertMessage from './AlertMessage';

function CartItemGrid() {
  const location = useLocation();
  const { cartItems } = location.state;
  console.log('Inside cartitems grid');
  let totalPrice = cartItems.reduce((acc, el) => acc + el.count * el.price, 0);

  const [showMessage, setShowMessage] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(false);

  async function bookTour() {
    let tickets = cartItems.map((item) => item.count);
    let tourIds = cartItems.map((item) => item.id);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BOOKING_SERVICE}/book`,
        {
          tickets,
          tourIds,
        },
        {
          withCredentials: true,
        }
      );
      setBookingStatus(true); // Booking is successful
    } catch (error) {
      setBookingStatus(false); // Booking failed
      throw new Error(error.response?.data?.message || error.message);
    } finally {
      setShowMessage(true);
      // Show the message after the booking attempt
    }
  }

  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        {cartItems.map((item) => (
          <CartItems
            key={item.id}
            item={{
              imageCover: item.image,
              count: item.count,
              id: item.id,
              place: item.place,
              price: item.price,
            }}
          />
        ))}
        <div className={style.totalprice}>{`TOTAL: ₹${totalPrice}`}</div>
        <DivWithContentCentered>
          <ButtonSecondary width='30%' onClick={bookTour}>
            BOOK
          </ButtonSecondary>
        </DivWithContentCentered>
      </div>
      {showMessage && (
        <AlertMessage
          status={{
            isSuccess: bookingStatus,
            message: bookingStatus
              ? 'Booking Successful'
              : 'Something went wrong',
          }}
          setShow={setShowMessage}
        />
      )}
    </div>
  );
}

export default CartItemGrid;
