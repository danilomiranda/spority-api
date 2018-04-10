import React from 'react'
import Page from '../components/page'
import Input from '../components/input'
import Modal from '../components/modal'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  change (query) {
    console.log(query)
  }

  render () {
    return (
      <Page>
        <Input
          placeholder='Comece a escrever...'
          label='Busque por artistas, álbums ou músicas'
          change={this.onChange}
        />
        <div className='page__section'>
          <Modal />
        </div>
      </Page>
    )
  }
}
