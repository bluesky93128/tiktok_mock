import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ButtonContainer, Number, TextView, IconContainer} from './styles';

const Button = props => {
  const {type, description} = props;

  return (
    <>
      <ButtonContainer>
        <IconContainer color={'#30303020'}>
          <Icon name={type} size={25} color={'black'} />
        </IconContainer>
        <Number>
          <TextView>{description}</TextView>
        </Number>
      </ButtonContainer>
    </>
  );
};

export default Button;
