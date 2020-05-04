import React from 'react';
import Modal from 'react-native-modal';
import SocialButton from '../../Components/SocialButton';
import ShareControlButton from '../../Components/ShareControlButton';
import {
  Container,
  Title,
  styles,
  InputContainer,
  CancelButton,
  TextView,
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
        style={styles.Modal}>
        <Container>
          <Title>Share to</Title>
          <InputContainer horizontal={true}>
            <SocialButton type={'Message'} />
            <SocialButton type={'SMS'} />
            <SocialButton type={'Copy link'} />
            <SocialButton type={'Facebook'} />
            <SocialButton type={'Email'} />
            <SocialButton type={'Other'} />
          </InputContainer>
          <InputContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <ShareControlButton type={'flag'} description={'Report'} />
            <ShareControlButton
              type={'not-interested'}
              description={'Not interested'}
            />
            <ShareControlButton
              type={'file-download'}
              description={'Save video'}
            />
            <ShareControlButton type={'face'} description={'Duet'} />
            <ShareControlButton type={'switch-camera'} description={'Switch'} />
            <ShareControlButton type={'flip-to-front'} description={'React'} />
            <ShareControlButton
              type={'bookmark-border'}
              description={'Add to Favorite'}
            />
            <ShareControlButton
              type={'filter-tilt-shift'}
              description={'Live photo'}
            />
            <ShareControlButton type={'gif'} description={'Share as GIF'} />
          </InputContainer>
          <CancelButton onPress={() => goBack()}>
            <TextView>Cancel</TextView>
          </CancelButton>
        </Container>
      </Modal>
    </>
  );
};

export default CommentModal;
