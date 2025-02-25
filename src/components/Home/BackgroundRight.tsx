import styled from 'styled-components';

const Svg = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  z-index: 1;
  top: 0;
  right: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  rotate:45deg;
`;

const BackgroundRight = () => {
  return (
    <Svg>
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#ffd449', stopOpacity: 1 }} />
           
            <stop offset="100%" style={{ stopColor: '#f7b538', stopOpacity: 0 }} />
          </radialGradient>
          <pattern id="circlePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="4" fill="url(#starGradient)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circlePattern)" />
      </svg>
    </Svg>
  );
};

export default BackgroundRight;
