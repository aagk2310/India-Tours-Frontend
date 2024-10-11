import style from './NavButton.module.css';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NavButton({ onClick, type = 'nav', state = null, setState = null }) {
  return type === 'back' ? (
    <div className={style.nav_button_back} onClick={onClick}>
      <ArrowBackIcon style={{ color: '#000' }} />
    </div>
  ) : (
    <div
      className={style.nav_button}
      onClick={() => {
        setState((s) => !s);
      }}
    >
      {state ? (
        <CloseIcon style={{ color: '#000' }} />
      ) : (
        <MenuIcon style={{ color: '#000' }} />
      )}
    </div>
  );
}

export default NavButton;
