import React, {useEffect, useState} from 'react';
import Animated from 'react-native-reanimated';
import {ButtonContainer, Image} from './styles';

const Button = props => {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAngle(angle + 0.3);
    }, 10);
    return () => clearTimeout(timer);
  }, [angle]);
  return (
    <>
      <ButtonContainer>
        <Animated.View
          style={{
            transform: [{rotate: angle}],
          }}>
          <Image
            source={{uri: props.userAvatar}}
            resizeMode={'cover'}
            overflow={'hidden'}
          />
        </Animated.View>
      </ButtonContainer>
    </>
  );
};

export default Button;
