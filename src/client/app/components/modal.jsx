import React from 'react'
import {connect} from 'react-redux'

import Input from './input'
import {setToken} from '../actions/tokenAction'

class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.change = this.change.bind(this)
  }

  toggleModal () {
    this.setState(prevState => {
      return { show: !prevState.show }
    })
  }

  change (token) {
    this.props.setToken(token)
  }

  componentDidMount () {
    if (this.props.token) {
      this.setState({
        show: false
      })
    }
  }

  render () {
    return (
      <div className={`modal ${!this.props.token ? 'show' : ''}`}>
        <div className='modal-header'>
          <span className='close' onClick={() => this.toggleModal()}>
            &times;
          </span>
        </div>
        <div className='modal-content'>
          <Input
            id='token-spotify'
            placeholder='Comece a escrever...'
            label='Informe o Token do Spotify'
            change={this.change}
          />
        </div>
        <style jsx='true'>{`
    .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  .show {
    display: block
  }
  
  .modal-header {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    width: 80%;
  }
  .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      width: 80%;
  }
  
  .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({TokenReducer}) => {
  return {
    token: TokenReducer.token
  }
}

export default connect(mapStateToProps, { setToken })(Modal)
