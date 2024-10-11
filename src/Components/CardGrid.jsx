import Card from './Card';
import style from './CardGrid.module.css';
import CircularSpinner from './CircularSpinner';
import useGetTours from '../services/tours';
import ExploreButton from './ExploreButton';
import CartButton from './CartButton';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import DivWithEqualSpace from '../StyledComponents/DivWithEqualSpace';
// const places = [
//   "Taj Mahal",
//   "Victoria Memorial",
//   "Golden Temple",
//   "India Gate",
//   "Charminar",
// ];
// const imgNames = ["taj", "vict", "gold", "gate", "charminar"];

function CardGrid({ btnType, children }) {
  let { data, error, isLoading } = useGetTours();
  let places = [];
  let images = [];
  let keys = [];
  let taglines = [];
  let price = [];

  if (isLoading) {
    return <CircularSpinner />;
  }

  if (!isLoading && !error) {
    data = data.sort((a, b) => a.id - b.id);
    price = data.map((d) => d.price);
    places = data.map((d) => d.category);
    images = data.map((d) => d.imageCover);
    keys = data.map((d) => d._id);
    taglines = data.map((d) => d.description);
    console.log(places, images);
  }
  // console.log(data);

  return (
    <div className={style.cardContainer} id='section'>
      {places.map((place, index) => {
        return (
          <Card
            place={place}
            imageName={images[index]}
            key={keys[index]}
            tagline={taglines[index]}
            id={keys[index]}
            btnType={btnType}
          >
            <div className={style.price}>
              <div
                style={{
                  margin: '0',
                  padding: '0',
                  display: 'inline-block',
                  width: '100%',
                  height: 'auto',
                }}
              >
                &#8377;{price[index]}
              </div>
              <div
                style={{
                  fontWeight: '300',
                  fontSize: '0.7rem',
                  padding: '0',
                  margin: '0',
                  display: 'inline-block',
                  width: '100%',
                  height: 'auto',
                }}
              >
                per person
              </div>
            </div>
            <DivWithContentCentered
              height='100%'
              width='60%'
              flexDirection='row'
            >
              {btnType === 'cart' && (
                <CartButton
                  id={keys[index]}
                  place={place}
                  image={images[index]}
                  price={price[index]}
                />
              )}
              {/* {btnType === 'explore' && <ExploreButton id={keys[index]} />} */}
              <ExploreButton id={keys[index]} />
            </DivWithContentCentered>
          </Card>
        );
      })}
    </div>
  );
}

export default CardGrid;
