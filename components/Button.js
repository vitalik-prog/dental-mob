import React from 'react';
import styled from 'styled-components/native'

const Button = ({children, color}) => {
  return (
      <TouchableWrapper color={color}>
        <ButtonText>
          {children}
        </ButtonText>
      </TouchableWrapper>
  )
};

export default Button;

const TouchableWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  background: ${props => props.color ? props.color : '#2a86ff'};
  height: 45px;
`

const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`
