import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { TbHomeFilled,TbCodeCircle2Filled ,TbDeviceImacCode } from "react-icons/tb";
import { SiAboutdotme } from "react-icons/si";
import NavigationRoute from "../../NavigationRoutes";
import  logo from "../../assets/logo.png";

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 5rem 1.4rem;
  margin: 1rem 2rem;
  align-items: center;
  justify-content: center;

`;

const NavContainer = styled.div`
  display: flex;
  gap: 8rem;
  padding-top: 1rem;
  flex-direction: row;
  position: absolute;   
`;

const StyledLink = styled(Link)<{ isActive?: boolean, activeColor: string }>`
  text-decoration: none;
  display: flex;
  width: max-content;
  flex-direction: column;
  gap:1rem;
  align-items: center;
  color: ${(props) => (props.isActive ? props.activeColor : '#333')}; // Change la couleur selon l'état
  transition: color 0.3s ease;
`;

const IconContainer = styled.div<{ isActive?: boolean, activeColor: string }>`
  background-color: ${(props) => (props.isActive ? props.activeColor : '#fff')}; // Couleur de fond si active
  padding: 8px 10px;
  border-radius: 100%;
  transition: all 0.3s ease;
  color : ${(props) => (props.isActive ? '#fff' : '#BBBBBB')}; 
  margin-top: ${(props) => (props.isActive ? '-5rem' : '1rem')}; // Décalage si active
  box-shadow: ${(props) => (props.isActive ? '0 8px 16px rgba(0, 0, 0, 0.2)' : 'none')}; // Ombre si active
  transform: scale(${(props) => (props.isActive ? 1 : 1)}); // Échelle si active
  border: 3px solid #fff; // Bordure blanche autour de l'icône
`;

const Label = styled.span<{ isActive?: boolean, activeColor: string }>`
  font-size: 16px;
  color: ${(props) => (props.isActive ? props.activeColor : '#333')}; // Couleur active du label
  margin-top: 5px;
  opacity: ${(props) => (props.isActive ? 1 : 0)}; // Affiche le label si actif
  transform: translateY(${(props) => (props.isActive ? 0 : 10)}px); // Déplacement vers le haut si actif
  transition: all 0.3s ease;
`;

const NavItem = styled.div<{ isActive?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap:1rem;
  transition: all 0.3s ease;
`;
const Logolink = styled(Link)`
display:flex;
width:90px;
text-decoration: none;
align-items:center;
justify-content:center;
width:auto;
position:absolute;
left:0;
top:0;
`;
const Logo = styled.img`
width: 50px;
height:50px;
`;



const NavigationBar = () => {
  const location = useLocation();
  const isHomeActive = location.pathname === NavigationRoute.HOME || location.pathname === "/";

  return (
    <Navbar>      
      <Logolink to={NavigationRoute.HOME}>
        
        <Logo src={logo} alt="" />
      </Logolink>
     
      <NavContainer>
      
      <NavItem isActive={isHomeActive}>
          <StyledLink to={NavigationRoute.HOME} activeColor="#84a98c" isActive={isHomeActive}>
            <IconContainer isActive={isHomeActive} activeColor="#84a98c">
              <TbHomeFilled size={24} />
            </IconContainer>
            <Label isActive={isHomeActive} activeColor="#84a98c">Accueil</Label>
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to={NavigationRoute.ABOUT} activeColor="#ff0450" isActive={location.pathname === NavigationRoute.ABOUT}>
            <IconContainer isActive={location.pathname === NavigationRoute.ABOUT} activeColor="#ff0450">
              <SiAboutdotme size={24} />
            </IconContainer>
            <Label isActive={location.pathname === NavigationRoute.ABOUT} activeColor="#ff0450">À propos</Label>
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to={NavigationRoute.PROJECTS} activeColor="#f9c80e" isActive={location.pathname === NavigationRoute.PROJECTS}>
            <IconContainer isActive={location.pathname === NavigationRoute.PROJECTS} activeColor="#f9c80e">
              <TbDeviceImacCode size={24} />
            </IconContainer>
            <Label isActive={location.pathname === NavigationRoute.PROJECTS} activeColor="#f9c80e">Projets</Label>
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to={NavigationRoute.TOOLS} activeColor="#8d99ae" isActive={location.pathname === NavigationRoute.TOOLS}>
            <IconContainer isActive={location.pathname === NavigationRoute.TOOLS} activeColor="#8d99ae">
              <TbCodeCircle2Filled  size={34} />
            </IconContainer>
            <Label isActive={location.pathname === NavigationRoute.TOOLS} activeColor="#8d99ae">Outils</Label>
          </StyledLink>
        </NavItem>
        
      </NavContainer>
    </Navbar>
  );
};

export default NavigationBar;
