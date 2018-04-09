import React from 'react'
export default () => (
  <header className='flex-container'>
    <img className='logo' src="public/logo.png" alt="Spotify" />

    <style jsx>{`
      header {
        background: #000;
        display: flex;
        font-size: 14px;
      }

      .flex-container {
        display: flex;
        justify-content: left;
        padding-bottom: 7px;
      }

      .logo {
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 25px;
        padding: 1px;
        margin-top: 10px;
        margin-left: 30px
      }
    `}</style>
  </header>
)
