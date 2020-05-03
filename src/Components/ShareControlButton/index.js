import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ButtonContainer, Number, TextView, IconContainer} from './styles';

const Button = props => {
  const {type, description} = props;

  return (
    <>
      <ButtonContainer>
        <IconContainer color={'#4b9dfe'}>
          <Icon name={type} size={25} color={'white'} />
        </IconContainer>
        <Number>
          <TextView>{description}</TextView>
        </Number>
      </ButtonContainer>
    </>
  );
};

export default Button;
