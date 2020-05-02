import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ButtonContainer, Image, PlusIcon} from './styles';

const Button = props => {
  return (
    <>
      <ButtonContainer>
        <Image
          source={{uri: props.userAvatar}}
          resizeMode={'cover'}
          overflow={'hidden'}
        />
      </ButtonContainer>
    </>
  );
};

export default Button;
