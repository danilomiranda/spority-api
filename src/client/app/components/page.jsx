import React from 'react'
import Header from './header.jsx'
import Meta from './meta.jsx'

export default ({ children }) => (
  <div className='main'>
    <Meta />
    <Header />

    <div className='page'>
      {children}
    </div>

    <style jsx='true' >{`
      body {
        background: #000;
      }
      .main {
        margin: auto;
        padding: 10px 0 0 0;
        background: #000;
      }

      .page {
        color: #828282;
        padding: 3px 10px;
        width: 80%;
        margin: auto;
      }

      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
)
