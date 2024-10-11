import style from './CartItems.module.css';
function CartItems({ item }) {
  const { imageCover, place, count, id, price } = item;
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <img src={imageCover} alt='' className={style.imgTour} />
        <div className={style.cartContainer}>{place}</div>

        <div className={style.price}>{`${price}*${count}=${
          price * count
        }`}</div>
      </div>
    </div>
  );
}

export default CartItems;
