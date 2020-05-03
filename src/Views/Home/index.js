import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';

import VideoRender from '../../Components/VideoView';
import {Container, Title, SwiperContainer} from './styles';
import CommentModal from '../ComentModal';
import ShareModal from '../ShareModal';

const Home = () => {
  const [isPlaying, setPlaying] = useState(true);
  const [curIndex, setCurIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useState();
  const [bShowComment, setShowComment] = useState(false);
  const [bShowShare, setShowShare] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://my-json-server.typicode.com/bluesky93128/tiktok_mock_db/videos',
    )
      .then(response => response.json())
      .then(json => {
        setVideos(json);
        console.log(videos);
        fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then(res => {
            setUser(res);
            setLoading(false);
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onVideoChange = index => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(res => {
        setUser(res);
        console.log(index);
        setCurIndex(index);
        setPlaying(true);
      });
  };

  return (
    <>
      {isLoading ? (
        <Container>
          <Title>Loading...</Title>
        </Container>
      ) : (
        <Container>
          <SwiperContainer>
            <Swiper
              showsPagination={false}
              horizontal={false}
              loadMinimal={true}
              onIndexChanged={onVideoChange}>
              {videos.map((video, index) => {
                return (
                  <VideoRender
                    video={video}
                    index={index}
                    curIndex={curIndex}
                    user={user}
                    isPlaying={isPlaying}
                    showComment={setShowComment}
                    onShare={setShowShare}
                  />
                );
              })}
            </Swiper>
          </SwiperContainer>
          <Title>Home</Title>
        </Container>
      )}
      <CommentModal
        isVisible={bShowComment}
        goBack={() => setShowComment(false)}
        curIndex={curIndex}
      />
      <ShareModal
        isVisible={bShowShare}
        goBack={() => setShowShare(false)}
        curIndex={curIndex}
      />
    </>
  );
};

export default Home;
