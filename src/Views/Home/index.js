import React, {useState} from 'react';
import Swiper from 'react-native-swiper';

import {Container, VideoView, Title, SwiperContainer} from './styles';
import PlayController from '../../Components/PlayController';
import mediaJSON from '../../assets/videos';

const home = () => {
  const [isPlaying, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [indeterminate, setIndeterminate] = useState(false);
  const [curIndex, setCurIndex] = useState(0);

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  return (
    <>
      <Container>
        <SwiperContainer>
          <Swiper
            showsPagination={false}
            horizontal={false}
            loadMinimal={true}
            onIndexChanged={index => {
              setCurIndex(index);
            }}>
            {mediaJSON.categories[0].videos.map((video, index) => {
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
                    onLoadStart={() => setIndeterminate(true)}
                    onReadyForDisplay={() => setIndeterminate(false)}
                  />
                  <PlayController
                    onPress={() => togglePlay()}
                    isPlaying={isPlaying}
                    progress={progress}
                    indeterminate={indeterminate}
                  />
                </>
              );
            })}
          </Swiper>
        </SwiperContainer>
        <Title>Home</Title>
      </Container>
    </>
  );
};

export default home;
