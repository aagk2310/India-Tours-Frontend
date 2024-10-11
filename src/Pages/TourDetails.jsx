import { useNavigate, useParams } from 'react-router-dom';
import Hero from '../Components/Hero';
import { useQuery } from '@tanstack/react-query';
import { Box, CircularProgress } from '@mui/material';
import HeadingTertiary from '../Components/HeadingTertiary';
import NavButton from '../Components/NavButton';
import Map from '../Components/Map';
import useGetToursById from '../services/toursById';
import Heading from '../StyledComponents/HeadingText';
import DivWithContentCentered from '../StyledComponents/DivWithContentCentered';
import GridDiv from '../StyledComponents/GridDiv';
import styled from 'styled-components';
import {
  ImageContainerDiv,
  ImgStyledComponent,
} from '../StyledComponents/ImageComponents';

function CategoryImages({ images }) {
  return (
    <DivWithContentCentered>
      <GridDiv
        columns='repeat(3, 1fr)'
        width='100%'
        height='65%'
        clipPath='polygon(0 25%, 100% 0, 100% 75%, 0 100%)'
      >
        {images.map((image) => {
          return (
            <ImageContainerDiv>
              <ImgStyledComponent src={image} objectFit='fill' />
            </ImageContainerDiv>
          );
        })}
      </GridDiv>
    </DivWithContentCentered>
  );
}

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetToursById(id);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    console.log(error);
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <p>Error loading data</p>
      </Box>
    );
  }

  function navigateBack() {
    navigate(-1);
  }

  return (
    <>
      <NavButton onClick={navigateBack} type='back' />

      <Hero img={data.imageCover} overlay={false}>
        <HeadingTertiary
          text={data.category}
          width='30%'
          height='15%'
          fontSize='3rem'
          fontWeight='300'
        />
      </Hero>
      <DivWithContentCentered margin='4% 0'>
        <Heading>VISIT INDIA's {data.category}</Heading>
      </DivWithContentCentered>
      <DivWithContentCentered margin='4% 0'>
        <div>{data.description}</div>
      </DivWithContentCentered>
      <CategoryImages images={data.images} />
      <DivWithContentCentered>
        <Map markers={data.places} />
      </DivWithContentCentered>
    </>
  );
}

export default TourDetails;
