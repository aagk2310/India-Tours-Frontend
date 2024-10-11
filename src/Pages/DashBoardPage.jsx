import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import CardGrid from '../Components/CardGrid';
import style from './DashBoardPage.module.css';
import { createContext, useContext, useState } from 'react';
import { ButtonSecondary } from '../StyledComponents/ButtonComponent';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import {
  ImageContainerDiv,
  ImgStyledComponent,
} from '../StyledComponents/ImageComponents';
import HeadingTertiary from '../Components/HeadingTertiary';
import Heading from '../StyledComponents/HeadingText';
import DivWithEqualSpace from '../StyledComponents/DivWithEqualSpace';

// function CartItemCountShower({ id, place, handleCartClick, itemById }) {
//   return (
//     <DivWithContentCentered>
//       <button onClick={() => handleCartClick(id, place, '-')}>-</button>
//       <button>{itemById.length}</button>
//       <button onClick={() => handleCartClick(id, place, '+')}>+</button>
//     </DivWithContentCentered>
//   );
// }
// function CartButton({ id, place }) {
//   const [cartItems, setCartItems] = useContext();
//   let itemById = cartItems.filter((item) => item.id === id);
//   const handleCartClick = (id, place, operation) => {
//     if (!operation) {
//       setCartItems([...cartItems, { id, place, count: 1 }]);
//     } else if (operation === '+') {
//       const newCart = [...cartItems, itemById[0].count++];
//       setCartItems(newCart);
//     } else if (operation === '-') {
//       const newCart = [
//         ...cartItems,
//         itemById[0].count > 1 ? itemById[0].count-- : delete itemById[0],
//       ];
//       setCartItems(newCart);
//     }
//   };
//   return (
//     <div>
//       {getItemById.length === 0 ? (
//         <ButtonSecondary onClick={handleCartClick}>ADD TO CART</ButtonSecondary>
//       ) : (
//         <CartItemCountShower
//           id={id}
//           place={place}
//           handleCartClick={handleCartClick}
//           itemById={itemById}
//         />
//       )}
//     </div>
//   );
// }

function ShoppingCartListItem({ img, category }) {
  return (
    <DivWithContentCentered
      width='100%'
      backgroundColor='white'
      height='5vw'
      borderBottom='1px solid #777'
    >
      <DivWithEqualSpace width='50%' flexDirection='row'>
        <ImageContainerDiv width='4vw' height='4vw'>
          <ImgStyledComponent src={img} objectFit='fill' />
        </ImageContainerDiv>
        <Heading fontSize='0.8rem'>{category}</Heading>
      </DivWithEqualSpace>
    </DivWithContentCentered>
  );
}

function ShoppingCartPreview({ cartItems }) {
  return (
    <div
      style={{
        width: '20vw',
        backgroundColor: 'blue',
        position: 'absolute',
        top: '13vh',
        right: '2vh',
        zIndex: 1,
      }}
    >
      {cartItems.map((item) => (
        <ShoppingCartListItem img={item.image} category={item.place} />
      ))}
    </div>
  );
}
export const CartContext = createContext();
function DashBoardPage({ name, userId }) {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';
  // const isBookingsPage = location.pathname === "/dashboard/bookings";

  const [cartItems, setCartItems] = useState([]);
  const [isCartHovered, setIsCartHovered] = useState(false);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Navigation
        name={name}
        userId={userId}
        isCartHovered={isCartHovered}
        setIsCartHovered={setIsCartHovered}
      />
      {isCartHovered && <ShoppingCartPreview cartItems={cartItems} />}

      {isDashboardPage ? (
        <>
          <div className={style.dashcard}>
            <CardGrid btnType='cart' />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </CartContext.Provider>
  );
}

export default DashBoardPage;
