import React from 'react'

const Col = ({ children, size }) => (
  <div className={`col-${size}`}>
    {children || ''}
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
        min-width: 190px;
      }
      .col-12 {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
      }
    `}</style>
  </div>
)

export default Col
