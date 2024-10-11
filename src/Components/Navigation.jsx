import { Link, NavLink, useNavigate } from 'react-router-dom';
import ShoppingCartLogo from './Shoppingcartlogo';
import Button from './Button';
import supabase from '../services/supabase';
import { CartContext } from '../Pages/DashBoardPage';
import { useContext } from 'react';
import style from './Navigation.module.css';
import { deleteAuthToken } from '../services/jwtCookie';
function Navigation({ name, userId, isCartHovered, setIsCartHovered }) {
  const navigate = useNavigate();

  const { cartItems, setCartItems } = useContext(CartContext);
  async function signout() {
    await deleteAuthToken();
    navigate('/login');
  }

  return (
    <nav
      style={{
        backgroundColor: '#444',
        height: '15vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '3%',
        paddingRight: '3%',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '20%',
          alignItems: 'center',
        }}
      >
        <NavLink
          to={'/dashboard'}
          className={style.navLink}
        >{`Welcome, ${name}`}</NavLink>
      </div>
      <div
        style={{
          display: 'flex',
          height: '100%',

          justifyContent: 'end',
          alignItems: 'center',
          columnGap: '2rem',
        }}
      >
        <Link to={'bookings'} state={{ userId }} className={style.navLink}>
          MY BOOKINGS
        </Link>

        <ShoppingCartLogo
          items={cartItems}
          isCartHovered={isCartHovered}
          setIsCartHovered={setIsCartHovered}
        />

        <Button type='lg' onClick={signout}>
          Log out
        </Button>
        <Link
          to={'cart'}
          state={{ cartItems: cartItems }}
          className={style.navLink}
        >
          BOOK
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
