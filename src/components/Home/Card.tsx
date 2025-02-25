import React from 'react';
import styled from 'styled-components';

import { FaLocationArrow } from "react-icons/fa6";
import { IconType } from 'react-icons';

// Define the props interface
interface CardProps {
  icon?: IconType;
  iconBgColor?: string; 
  title: string;        
  description: string;  
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div<{ bgColor?: string }>` // Add a type for props
  background-color: ${props => props.bgColor || 'black'};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

const CardContent = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
  color: #666;
`;

const ArrowIcon = styled(FaLocationArrow)`
  color: #333;
  font-size: 16px;
  margin-left: 10px;
`;

// Update the component definition with the props interface
const Card: React.FC<CardProps> = ({ icon: Icon,iconBgColor, title, description }) => {
  return (
    <CardWrapper>
      <IconWrapper bgColor={iconBgColor}>
      {Icon && <Icon size={16} />}
      </IconWrapper>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
      <ArrowIcon />
    </CardWrapper>
  );
};

export default Card;
