import { useState } from 'react';
import Button from '../Components/Button';
import CardGrid from '../Components/CardGrid';
import Hero from '../Components/Hero';
import NavButton from '../Components/NavButton';
import style from './HomePage.module.css';
import NavigationMenu from '../Components/NavigationMenu';
import Footer from '../Components/Footer';
import Heading from '../StyledComponents/HeadingText';

import { ButtonPrimary } from '../StyledComponents/ButtonComponent';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import NavigationHome from '../Components/NavigationHome';

function HeroContent() {
  return (
    <>
      <div>
        <div className={style.mainTagline}>Discover</div>
        <p className={style.secondaryTagline}>Another Destination</p>
      </div>
      <ButtonPrimary>Check Out Tours</ButtonPrimary>
    </>
  );
}

function HomePage() {
  // const [navState, setNavState] = useState(false);
  return (
    <div className='home' style={{ position: 'relative' }}>
      {/* <NavButton state={navState} setState={setNavState} /> */}
      <Hero>
        <NavigationHome />
        <HeroContent />
      </Hero>
      <DivWithContentCentered backgroundColor='f7f7f7' margin='4% 0 8% 0'>
        <Heading>EXCITING TOURS FOR ADVENTUROUS PEOPLE</Heading>
      </DivWithContentCentered>
      <CardGrid btnType='explore' />

      {/* {navState ? (
        <NavigationMenu state={navState} setState={setNavState} />
      ) : (
        false
      )} */}
      <Footer />
    </div>
  );
}

export default HomePage;
