import React from 'react'

import milesecondsToTime from '../../lib/toTime'

export default ({ tracks = [] }) => (
  <div className='album_tracks'>
    <div className='tracks'>
      <div className='tracks_heading'>
        <div className='tracks_heading_number'>#</div>

        <div className='tracks_heading_title'>Song</div>

        <div className='tracks_heading_length'>
          <i className='ion-ios-stopwatch-outline' />
        </div>
      </div>
      {/* eslint-disable-next-line camelcase  */}
      {tracks.map(({name, explicit, duration_ms}) => (
        <div className='track'>
          <div className='track_number'>1</div>

          <div className='track_added'>
            <i className='ion-checkmark-round added' />
          </div>

          <div className='track_title'>{name}</div>
          {explicit ? (
            <div className='track_explicit'>
              <span className='label'>Explicit</span>
            </div>
          ) : ''}
          {/* eslint-disable-next-line camelcase  */}
          <div className='track_length'>{milesecondsToTime(duration_ms)}</div>

        </div>
      ))}
    </div>
    <style jsx='true'>{`
      .tracks {
        display: flex;
        flex-flow: column wrap;
        margin-bottom: 15px;
      }
      .tracks_heading {
        color: #aaaaaa;
        height: 42px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
      }
      .tracks_heading_number {
        margin-left: 10px;
        font-style: italic;
      }
      .tracks_heading_title {
        margin-left: 70px;
        width: 45%;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .tracks_heading_length {
        margin-left: auto;
        font-size: 20px;
      }
      .tracks .track {
        border-top: 1px solid #282828;
        height: 42px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
      }
      .tracks .track_number {
        margin-left: 10px;
        color: #aaaaaa;
        width: 12px;
      }
      .tracks .track_added {
        margin-left: 30px;
        color: #c8c8c8;
      }
      .track .track_title {
        width: 80%;
      }
      .tracks .track_explicit .label {
        border: 1px;
        border-style: solid;
        border-color: #424242;
        color: #424242;
        text-transform: uppercase;
    }
    .label {
        display: inline;
        padding: .2em .6em .3em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25em;
    }
    .tracks .track_length {
      margin-left: auto;
      color: #aaaaaa;
    }
    `}</style>
  </div>
)
