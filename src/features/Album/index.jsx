import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './component/AlbumList'

AlbumSong.propTypes = {

};

function AlbumSong(props) {
  const albumList = [
    {
      id: 1,
      name: 'Album Trending',
      thumbailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/4/d/b/f/4dbf769079e956c3d104130af83ae2c5.jpg',
    },
    {
      id: 2,
      name: 'Rap star',
      thumbailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/6/8/9/b/689b9f49c7ceb4ca4dc326571bba4e2a.jpg',
    },
    {
      id: 3,
      name: 'Hot Music',
      thumbailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/2/7/8/4/278427fa3c50a2d46f58b5a7078b6f3d.jpg',
    },
  ]
  return (
    <div>
      <h2>Maybe you will like</h2>
      <AlbumList albumList={albumList}/>
    </div>
  );
}

export default AlbumSong;