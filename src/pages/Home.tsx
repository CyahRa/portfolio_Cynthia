import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  maring:0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  height: auto;
`;

const PageContent = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  font-size: 2rem;
  overflow: hidden;
`;

const Home = () => {
  return (
    <HomeContainer>
    <Navbar />
    <Content>
      <PageContent>
        <Outlet />
      </PageContent>
    </Content>
    <Footer/>
  </HomeContainer>
  )
}

export default Home