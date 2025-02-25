
import styled from 'styled-components';

interface CardProductProps {
  photo: string,
  details: string,
  title: string
}


const Card = styled.div`
  width: 100%;
  height: 100%;
  box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  position: relative;
  transform-origin: 100% 0%;
  transform-style: preserve-3d;
  border-radius:10px;
  transition: 0.8s ease-in-out;
`;
const Container = styled.div`
  width: 600px;
  height: 450px;
  margin: 0 auto;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  perspective-origin: right;
`;



const Logo = styled.img`
  margin-top: auto;
  object-fit: contain;
  position: relative;

 
`;


const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-radius:10px;
  overflow:hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transform: rotateY(0deg);
`;





const CardProduct: React.FC<CardProductProps> = ({ photo })  => {
  return (

    <Container>
      <Card>
        <Front>
          <Logo src={photo}/>
           
          
        </Front>
        
      </Card>
    </Container>


  )
}

export default CardProduct