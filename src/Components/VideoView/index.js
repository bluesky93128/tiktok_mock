import React, {useState} from 'react';
import AutoScrolling from 'react-native-auto-scrolling';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PlayController from '../../Components/PlayController';
import UserButton from '../../Components/UserButton';
import LikeButton from '../../Components/LikeButton';
import CommentButton from '../../Components/CommentButton';
import ShareButton from '../../Components/ShareButton';
import ResponseButton from '../../Components/ResponseButton';

import {VideoView, ContentContainer, TextView, Description} from './styles';
//unrecognized font family issue - fixed by react-native link then pod install

const VideoRender = props => {
  const [isPlaying, setPlaying] = useState(props.isPlaying);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [indeterminate, setIndeterminate] = useState(false);

  const {video, index, curIndex, user, showComment, onShare} = props;

  const renderButtons = () => {
    return (
      <>
        <UserButton userAvatar={user.results[0].picture.thumbnail} />
        <LikeButton />
        <CommentButton onPress={() => showComment(true)} />
        <ShareButton onPress={() => onShare(true)} />
        <ResponseButton userAvatar={user.results[0].picture.thumbnail} />
      </>
    );
  };

  const renderContent = () => {
    return (
      <>
        <ContentContainer>
          <TextView>
            {'@' + user.results[0].name.first + ' ' + user.results[0].name.last}
          </TextView>
          <TextView>{video.title}</TextView>
          <Description>
            <Icon name={'music'} size={20} color={'white'} />
            <AutoScrolling>
              <TextView numberOfLines={1}>{video.description}</TextView>
            </AutoScrolling>
          </Description>
        </ContentContainer>
      </>
    );
  };

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  return (
    <>
      <VideoView
        source={{
          uri: video.sources[0],
        }}
        poster={video.thumb}
        repeat
        resizeMode={'contain'}
        paused={!(isPlaying && curIndex === index)}
        onLoad={data => {
          if (curIndex === index) {
            setDuration(data.duration);
          }
        }}
        onProgress={data => {
          if (curIndex === index) {
            setProgress(data.currentTime / duration);
          }
        }}
        onLoadStart={() => {
          if (curIndex === index) {
            setIndeterminate(true);
          }
        }}
        onReadyForDisplay={() => setIndeterminate(false)}
      />
      <PlayController
        onPress={() => togglePlay()}
        isPlaying={isPlaying}
        progress={progress}
        indeterminate={indeterminate}
      />
      {renderButtons()}
      {renderContent()}
    </>
  );
};

export default VideoRender;
