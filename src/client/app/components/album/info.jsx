import React from 'react'

export default ({images, year, name}) => (
  <div className='album_info'>
    <div className='album_info_art'>
      <img
        src={images[1] ? images[1].url : 'http://via.placeholder.com/135x135'}
        alt={name}
      />
    </div>

    <div className='album_info_meta'>
      <div className='album_year'>{year}</div>
      <div className='album_name'>{name}</div>
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
