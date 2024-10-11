import { useContext } from 'react';
import { ButtonSecondary } from '../StyledComponents/ButtonComponent';
import { CartContext } from '../Pages/DashBoardPage';
import DivWithEqualSpace from '../StyledComponents/DivWithEqualSpace';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import CircularButton from '../StyledComponents/CirularButton';

function CartItemCountShower({ id, place, handleCartClick, itemById }) {
  return (
    // <DivWithContentCentered height='100%'>
    <DivWithEqualSpace flexDirection='row' width='45%'>
      <CircularButton onClick={() => handleCartClick(id, place, '-')}>
        -
      </CircularButton>
      <div style={{ color: '#777' }}>{itemById[0].count}</div>
      <CircularButton onClick={() => handleCartClick(id, place, '+')}>
        +
      </CircularButton>
    </DivWithEqualSpace>
    // </DivWithContentCentered>
  );
}

function CartButton({ id, place, image, price }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  let itemById = cartItems.filter((item) => item.id === id);

  const handleCartClick = (id, place, operation) => {
    let updatedCartItems;
    if (!operation) {
      // Add new item to cart
      updatedCartItems = [...cartItems, { id, place, count: 1, image, price }];
    } else if (operation === '+') {
      updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
    } else if (operation === '-') {
      updatedCartItems = cartItems
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);
    }
    setCartItems(updatedCartItems);
  };

  return (
    <>
      {itemById.length === 0 ? (
        <ButtonSecondary onClick={() => handleCartClick(id, place)}>
          ADD TO CART
        </ButtonSecondary>
      ) : (
        <CartItemCountShower
          id={id}
          place={place}
          handleCartClick={handleCartClick}
          itemById={itemById}
        />
      )}
    </>
  );
}

export default CartButton;
