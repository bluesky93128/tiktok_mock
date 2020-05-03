import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import {ButtonContainer, Number, TextView, IconContainer} from './styles';

const Button = props => {
  const [isLike, setLike] = useState(false);
  const {type} = props;

  const renderIcon = () => {
    if (type === 'Message') {
      return (
        <IconContainer color={'red'}>
          <Icon name={'message'} size={25} color={'white'} />
        </IconContainer>
      );
    } else if (type === 'SMS') {
      return (
        <IconContainer color={'#1dca77'}>
          <Icon name={'sms'} size={25} color={'white'} />
        </IconContainer>
      );
    } else if (type === 'Copy link') {
      return (
        <IconContainer color={'#6685fe'}>
          <Icon name={'link'} size={25} color={'white'} />
        </IconContainer>
      );
    } else if (type === 'Facebook') {
      return (
        <IconContainer color={'#0076f9'}>
          <FacebookIcon name={'facebook'} size={25} color={'white'} />
        </IconContainer>
      );
    } else if (type === 'Email') {
      return (
        <IconContainer color={'#0cbef6'}>
          <Icon name={'email'} size={25} color={'white'} />
        </IconContainer>
      );
    } else if (type === 'Other') {
      return (
        <IconContainer color={'#4b9dfe'}>
          <Icon name={'more'} size={25} color={'white'} />
        </IconContainer>
      );
    }
  };
  return (
    <>
      <ButtonContainer onPress={() => setLike(!isLike)}>
        {renderIcon()}
        <Number>
          <TextView>{type}</TextView>
        </Number>
      </ButtonContainer>
    </>
  );
};

export default Button;
