import style from './Hero.module.css';
import '../index.css';

function Hero({
  img = 'https://gkvsnmcywgascekueyme.supabase.co/storage/v1/object/public/tourimages/hero-5.jpg?t=2023-12-25T10%3A05%3A24.377Z',
  overlay = true,
  children,
}) {
  return (
    <div
      style={{
        backgroundImage: overlay
          ? `linear-gradient(to right, rgba(134, 93, 255, 0.8), rgba(151, 222, 255, 0.8)), url('${img}')`
          : `url('${img}')`,
      }}
      className={style.hero}
    >
      {children}
      {/*  */}
    </div>
  );
}

export default Hero;
