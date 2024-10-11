import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import style from './Shoppingcartlogo.module.css';
import Typography from '@mui/material/Typography';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import { CartContext } from '../Pages/DashBoardPage';
import { useContext, useState } from 'react';

function ShoppingCartItemCounter({ items }) {
  const totalCount = items.reduce(
    (accumulator, item) => accumulator + item.count,
    0
  );
  return (
    <div className={style.circleIcon}>
      <Typography className={style.countText} color='white' variant='body2'>
        {totalCount}
      </Typography>
    </div>
  );
}

function ShoppingCartIcon() {
  return (
    <div className={style.flexContainer}>
      <ShoppingCartSharpIcon
        color='white'
        fontSize='large'
      ></ShoppingCartSharpIcon>
    </div>
  );
}

function ShoppingCartLogo({ items, isCartHovered, setIsCartHovered }) {
  return (
    <div
      className={style.container}
      onMouseOver={() => setIsCartHovered(true)}
      onMouseOut={() => setIsCartHovered(false)}
    >
      {items.length > 0 && <ShoppingCartItemCounter items={items} />}
      <ShoppingCartIcon />
    </div>
  );
}

export default ShoppingCartLogo;
