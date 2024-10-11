import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationHome = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      style={{
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '0',
        right: '5%',
      }}
      variant='light'
    >
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link
            as={NavLink}
            to='/login'
            style={{ color: ' #fff', fontWeight: '700' }}
          >
            LOGIN
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/signup'
            style={{ color: '#fff', fontWeight: '700' }}
          >
            SIGN UP
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationHome;
