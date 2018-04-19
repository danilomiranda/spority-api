import React from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'

import Page from '../components/page'
import Input from '../components/input'
import Modal from '../components/modal'
import Row from '../components/row'
import { search, expiredToken } from '../actions'
import Card from '../components/card'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.change = this.change.bind(this)
  }

  change (query) {
    this.props.search({query, token: this.props.token})
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
          <Row>
            {this.props.loading && !this.props.albums ? (
              <ReactLoading type='bubbles' color='#828282' />
            ) : ''}
            {this.props.error && this.props.query ? (
              <div className='col-12'>
                <h2 className='error'>{this.props.error.message}</h2>
              </div>
            ) : ''}
            {this.props.albums ? (
              <div className='col-12'>
                <h2>{`Resultados encontrados para "${this.props.query}"`}</h2>
              </div>
            ) : (
              <div className='col-12'>
                <h2>{`Nenhum Resultado encontrado`}</h2>
              </div>
            )}
          </Row>
          <Row>
            {this.props.albums && this.props.albums.items ? this.props.albums.items.map(item => (
              <Card key={item.id} {...item} />
            )) : ''}
          </Row>
        </div>
        <div className='page__section'>
          <Modal />
        </div>
        <style jsx='true'>{`
          .error {
            color: red
          }
        `}</style>
      </Page>
    )
  }
}

const mapStateToProps = ({SearchReducer, TokenReducer}) => {
  console.log('component albums -> ', SearchReducer)
  return {
    albums: SearchReducer.albums,
    loading: SearchReducer.loading,
    error: SearchReducer.error,
    query: SearchReducer.query,
    token: TokenReducer.token
  }
}

export default connect(mapStateToProps, { search, expiredToken })(Search)
