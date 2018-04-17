import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'
import Input from '../components/input'
import Modal from '../components/modal'
import { search } from '../actions'
import Card from '../components/card'

class Albums extends React.Component {
  constructor (props) {
    super(props)
    this.change = this.change.bind(this)
  }

  change (query) {
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
          <div className='row'>
            <div className='col-12'>
              <h2>{`Resultados encontrados para "${this.props.query}"`}</h2>
            </div>
          </div>
          <div className='row'>
            {this.props.albums.items ? this.props.albums.items.map(item => (
              <Card key={item._id} {...item} />
            )) : ''}
          </div>
        </div>
        <div className='page__section'>
          <Modal />
        </div>
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
      </Page>
    )
  }
}

const mapStateToProps = ({SearchReducer}) => {
  console.log('component albums -> ', SearchReducer)
  return {
    albums: SearchReducer.albums,
    query: SearchReducer.query
  }
}

export default connect(mapStateToProps, { search })(Albums)
