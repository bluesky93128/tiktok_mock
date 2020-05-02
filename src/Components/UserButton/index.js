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
        <PlusIcon>
          <Icon name={'plus-circle'} size={15} color={'red'} />
        </PlusIcon>
      </ButtonContainer>
    </>
  );
};

export default Button;
