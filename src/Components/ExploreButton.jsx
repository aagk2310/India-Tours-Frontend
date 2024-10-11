import { useNavigate } from 'react-router-dom';
import { ButtonSecondary } from '../StyledComponents/ButtonComponent';

function ExploreButton({ id }) {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // console.log("Button clicked!");
    navigate(`/tours/${id}`);
  };

  return (
    <ButtonSecondary onClick={handleExploreClick}>EXPLORE</ButtonSecondary>
  );
}

export default ExploreButton;
