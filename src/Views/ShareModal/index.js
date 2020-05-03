import React from 'react';
import Modal from 'react-native-modal';
import SocialButton from '../../Components/SocialButton';
import ShareControlButton from '../../Components/ShareControlButton';
import {Container, Title, styles, InputContainer} from './styles';

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
        style={styles.Modal}>
        <Container>
          <Title>Share to</Title>
          <InputContainer>
            <SocialButton type={'Message'} />
            <SocialButton type={'SMS'} />
            <SocialButton type={'Copy link'} />
            <SocialButton type={'Facebook'} />
            <SocialButton type={'Email'} />
            <SocialButton type={'Other'} />
          </InputContainer>
          <InputContainer>
            <ShareControlButton type={'flag'} description={'Report'} />
            <ShareControlButton
              type={'not-interested'}
              description={'Not interested'}
            />
            <ShareControlButton
              type={'file-download'}
              description={'Save video'}
            />
            <ShareControlButton type={'duet'} description={'Duet'} />
            <ShareControlButton type={'switch-camera'} description={'Switch'} />
            <ShareControlButton type={'react'} description={'React'} />
            <ShareControlButton
              type={'favorite'}
              description={'Add to Favorite'}
            />
            <ShareControlButton
              type={'live-photo'}
              description={'Live photo'}
            />
            <ShareControlButton type={'gif'} description={'Share as GIF'} />
          </InputContainer>
        </Container>
      </Modal>
    </>
  );
};

export default CommentModal;
