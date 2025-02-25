
import styled from 'styled-components';
import background from "../../../assets/images/images/background.png";

const LogoWrapper = styled.div`
  width: 200px;
  position:absolute;
  z-index:1;
  top:20rem;
  left:-5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Background = styled.img`


`;


const SvgPage = () => {
    return (
        <LogoWrapper>
            <Background src={background}/>
        </LogoWrapper>
    );
};

export default SvgPage;






