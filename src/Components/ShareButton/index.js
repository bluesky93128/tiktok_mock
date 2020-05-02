import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ButtonContainer, Image, PlusIcon} from './styles';

const Button = props => {
  return (
    <>
      <ButtonContainer>
        <Icon name={'share'} size={30} color={'white'} />
      </ButtonContainer>
    </>
  );
};

export default Button;
