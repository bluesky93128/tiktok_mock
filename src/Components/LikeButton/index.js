import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonContainer, Number, TextView} from './styles';

const Button = props => {
  const [isLike, setLike] = useState(false);
  return (
    <>
      <ButtonContainer onPress={() => setLike(!isLike)}>
        <Icon name={'heart'} size={40} color={isLike ? 'red' : 'white'} />
        <Number>
          <TextView>14.5k</TextView>
        </Number>
      </ButtonContainer>
    </>
  );
};

export default Button;
