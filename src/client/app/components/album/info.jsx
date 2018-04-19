import React from 'react'

/* eslint-disable-next-line camelcase  */
export default ({images, release_date, name, artist}) => (
  <div className='album_info'>
    <div className='album_info_art'>
      <img
        src={images[1] ? images[1].url : 'http://via.placeholder.com/135x135'}
        alt={name}
      />
    </div>

    <div className='album_info_meta'>
      {/* eslint-disable-next-line camelcase  */}
      <div className='album_year'>{release_date}</div>
      <div className='album_name'>{name}</div>
      <div className='album_artist'>{artist[0] ? artist[0].name : ''}</div>
    </div>
    <style jsx='true'>{`
      .album_info {
        margin-bottom: 15px;
        display: flex;
        flex-flow: row wrap;
      }
      .album_info_art img {
        width: 135px;
        height: 135px;
        -webkit-transition: opacity .2s ease-in-out;
        -moz-transition: opacity .2s ease-in-out;
        -ms-transition: opacity .2s ease-in-out;
        -o-transition: opacity .2s ease-in-out;
        transition: opacity .2s ease-in-out;
      }
      .album_info_art img:hover {
        zoom: 1;
        filter: alpha(opacity=50);
        opacity: 0.5;
      }
      .album_info_meta {
        width: calc( 100% - 150px);
        margin-left: 15px;
        display: flex;
        flex-flow: column wrap;
      }
      .album_info_meta .album_year {
        color: #aaaaaa;
        letter-spacing: 1px;
      }
      .album_info_meta .album_name {
        color: white;
        font-size: 30px;
        font-weight: 100;
      }
    `}</style>
  </div>
)
