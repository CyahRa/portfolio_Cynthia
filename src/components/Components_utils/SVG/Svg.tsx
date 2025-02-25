import styled from 'styled-components';

const Svg = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  z-index: 0;
  top: 15rem;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SvgComponent = () => {
    return (
        <Svg>
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Cercle simple sans motif */}
                <circle cx="100" cy="100" r="100" fill="#F7F7F7" />


            </svg>

            <svg width="250" height="250" viewBox="0 0 250 90" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="20" fill="red" style={{ right: 0 }} />
            </svg>
        </Svg>
    );
};

export default SvgComponent;
