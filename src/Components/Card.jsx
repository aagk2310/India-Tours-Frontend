import style from './Card.module.css';
import HeadingTertiary from './HeadingTertiary';
function CardHeader({ imgName, place }) {
  return (
    <>
      <div className={style.cardHeader}>
        <div className={style.cardPicture}>
          {/* <div className={style.cardPictureOverlay}>&nbsp;</div> */}
          <img src={imgName} alt='' className={style.cardPictureImg} />
        </div>
        <div
          style={{
            position: 'absolute',
            right: '3%',
            bottom: '6%',
            width: '50%',
            height: '15%',
          }}
        >
          <HeadingTertiary
            text={place}
            width='100%'
            height='100%'
            fontSize='1.5rem'
            fontWeight='300'
          />
        </div>
      </div>
    </>
  );
}

function CardBody({ description }) {
  return <div className={style.headline}>{description}</div>;
}
function CardFooter({ children }) {
  return <div className={style.footer}>{children}</div>;
}

function Card({ place, imageName, tagline, id, children }) {
  return (
    <div className={style.card}>
      <CardHeader imgName={imageName} place={place} />
      <CardBody description={tagline} />
      <CardFooter>{children}</CardFooter>
    </div>
  );
}

export default Card;
