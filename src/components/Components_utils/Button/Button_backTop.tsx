import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #f8b229;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <ScrollButton onClick={scrollToTop}>
      <FaAnglesUp fontSize="large" />
    </ScrollButton>
  ) : null;
};

export default ScrollToTopButton;