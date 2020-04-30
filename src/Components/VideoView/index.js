import React, {Component} from 'react';
import {View, Image} from 'react-native';

import Video from 'react-native-video';
import mediaJSON from '../../assets/videos';

//unrecognized font family issue - fixed by react-native link then pod install

export default class VideoPlayerWrapper extends Component {
  state = {playPressed: false};

  render() {
    console.log(this.props.videoUrl);
    return (
      <View>
        {mediaJSON.categories[0].videos.map((video, index) => {
          if (this.props.curIndex === index) {
            return <Video {...this.props} />;
          } else {
            return (
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode={'contain'}
                source={{uri: video.thumb}}
              />
            );
          }
        })}
      </View>
    );
  }
}
