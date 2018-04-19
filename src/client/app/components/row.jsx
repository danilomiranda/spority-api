import React from 'react'

const Row = ({ children }) =>
  (<div className='row'>
    {children || ''}
    <style jsx='true'>{`
      .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;
        margin-bottom: 30px;
      }
    `}</style>
  </div>)

export default Row
