import { useContext, useState } from 'react';
import ShoppingCartLogo from './Shoppingcartlogo';

function Cart() {
  const CartContext = useContext();
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider key={{ cartItems, setCartItems }}>
      <ShoppingCartLogo />
    </CartContext.Provider>
  );
}

export default Cart;
