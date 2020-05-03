import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native';
import {
  Container,
  Title,
  CloseButton,
  styles,
  ListView,
  InputContainer,
  ItemContainer,
  Avatar,
  ItemContent,
  HeartContainer,
  TextView,
  TextInput,
  SendButton,
} from './styles';

const CommentModal = props => {
  const {isVisible, goBack, curIndex} = props;
  const [commentData, setCommentData] = useState();
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/comments?postId=' + (curIndex + 1),
    )
      .then(response => response.json())
      .then(json => {
        setCommentData(json);
        console.log('comments of ', curIndex, ' = ', json);
      });
  }, [curIndex]);

  const Item = ({item}) => {
    const [like, setLike] = useState(false);
    return (
      <>
        <ItemContainer>
          <Avatar
            source={{
              uri:
                'https://randomuser.me/api/portraits/thumb/men/' +
                (curIndex + item.item.id) +
                '.jpg',
            }}
          />
          <ItemContent>
            <TextView>{item.item.name}</TextView>
            <TextView>{item.item.body}</TextView>
          </ItemContent>
          <HeartContainer onPress={() => setLike(!like)}>
            <Icon
              name={like ? 'heart' : 'heart-outline'}
              size={15}
              color={like ? 'red' : 'gray'}
            />
            <TextView>154</TextView>
          </HeartContainer>
        </ItemContainer>
      </>
    );
  };

  const sendComment = () => {
    commentData.push({
      id: 1,
      name: 'User',
      body: newComment,
    });
  };

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
          <Title>1000 comments</Title>
          <CloseButton>
            <Icon name={'close'} size={15} color={'black'} />
          </CloseButton>
          <ListView>
            <FlatList
              data={commentData}
              renderItem={item => <Item item={item} />}
              keyExtractor={item => {
                item.id + 1;
              }}
            />
          </ListView>
          <InputContainer>
            <TextInput
              value={newComment}
              placeholder={'Add comment'}
              onChangeText={text => setNewComment(text)}
            />
            <SendButton
              onPress={() => {
                sendComment();
                setNewComment('');
              }}>
              <Icon name={'send'} size={30} color={'gray'} />
            </SendButton>
          </InputContainer>
        </Container>
      </Modal>
    </>
  );
};

export default CommentModal;
