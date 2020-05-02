import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Title,
  CloseButton,
  styles,
  ListView,
  InputContainer,
} from './styles';

const CommentModal = props => {
  const {isVisible, goBack} = props;
  return (
    <>
      <Modal
        animationType="slide"
        isVisible={isVisible}
        swipeDirection={'down'}
        onSwipeComplete={goBack}
        onBackButtonPress={goBack}
        onBackdropPress={goBack}
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.Modal}>
        <Container>
          <Title>1000 comments</Title>
          <CloseButton>
            <Icon name={'close'} size={15} color={'black'} />
          </CloseButton>
          <ListView />
          <InputContainer />
        </Container>
      </Modal>
    </>
  );
};

export default CommentModal;
