import React from 'react'

const Card = ({ _id, name, images }) => (
  <div className='col-2'>
    <div className='media-object'>
      <div className='media-object-hoverable'>
        <div className='image-wrapper'>
          <img className='cover-art-image' src={images[1].url} />
        </div>
        <div className='mo-info'>
          <div className='react-contextmenu-wrapper'>
            <a
              className='mo-info-name'
              title='Brazilian Pop'
              href='/album/4liTLZ1iNeBFeCWm0GFbGG'
            >
              {name}
            </a>
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
      .col-2 {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        max-width: none;
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
      }
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
  </div>
)

export default Card
