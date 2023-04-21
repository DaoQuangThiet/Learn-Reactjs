import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {

};

function Album(props) {
  const { album } = props
  return (
    <div className='album'>
      <div className='album_thumbnail'>
        <img src={album.thumbailUrl} alt={album.name}/>
      </div>
      <p className='album_name'>{album.name}</p>
    </div>
  );
}

export default Album;