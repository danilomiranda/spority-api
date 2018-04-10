import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'
import Input from '../components/input'
import Modal from '../components/modal'
import { search } from '../actions'

class Albums extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: []
    }
    this.change = this.change.bind(this)
  }

  change (query) {
    console.log(query)
    this.props.search(query)
  }

  render () {
    return (
      <Page>
        <Input
          placeholder='Comece a escrever...'
          label='Busque por artistas, álbums ou músicas'
          change={this.change}
        />
        <div className='page__section'>
          {this.props.albums.items ? this.props.albums.items.map(item => (
            item.name
          )) : ''}
        </div>
        <div className='page__section'>
          <Modal />
        </div>
      </Page>
    )
  }
}

const mapStateToProps = ({SearchReducer}) => {
  console.log('component albums -> ', SearchReducer.albums)
  return {
    albums: SearchReducer.albums
  }
}

export default connect(mapStateToProps, { search })(Albums)
