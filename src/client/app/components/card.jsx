import React from 'react'
import { Link } from 'react-router-dom'
import Col from '../components/col'

const Card = ({ id, name, images }) => (
  <Col size='2'>
    <div className='media-object'>
      <div className='media-object-hoverable'>
        <div className='image-wrapper'>
          {images[1] ? (
            <img className='cover-art-image' src={images[1].url} />
          ) : (
            <img className='cover-art-image' src='http://via.placeholder.com/188x188' />
          )}
        </div>
        <div className='mo-info'>
          <div className='react-contextmenu-wrapper'>
            <Link
              to={`/album/${id}`}
              className='mo-info-name'
              title='Brazilian Pop'
            >
              {name}
            </Link>
          </div>
        </div>
      </div>
      <div className='mo-meta ellipsis-one-line'>
        <div className='react-contextmenu-wrapper'>
          <a href='/artist/2K13AVg3bFpHSxDM1vJ0qA' />
        </div>
      </div>
    </div>
    <style jsx='true'>{`
      .media-object {
        position: relative;
        padding-bottom: 2.5em;
        max-width: 450px;
      }
      .cover-art-image {
        transition-property: opacity;
        transition-duration: .3s;
        transition-timing-function: cubic-bezier(.3,0,.4,1);
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: cover!important;
        background-position: 50%;
        opacity: 1;
      }
      .image-wrapper {
        width: 188px;
        height: 188px;
        position: relative;
        margin: 0 8px 8px 0;
        float: left;
      }
      .mo-info {
        margin: 12px 0 4px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        display: block;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .react-contextmenu-wrapper {
        display: inline;
      }
      .mo-info-name {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: .015em;
        font-weight: 400;
        color: #fff;
        text-transform: none;
        max-height: 560px;
      }
      .media-object a {
        border-bottom-width: 0;
      }
    `}</style>
  </Col>
)

export default Card
