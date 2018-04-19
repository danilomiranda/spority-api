import React from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'

import Page from '../components/page'
import Info from '../components/album/info'
import Modal from '../components/modal'
import Tracks from '../components/album/tracks'
import Col from '../components/col'
import Row from '../components/row'
import { loadAlbum } from '../actions'

class Album extends React.Component {
  constructor (props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount () {
    console.log('COMPONENTDIDMOUNT - > ', this.props)
    const id = this.props.match.params.id
    if (id) {
      this.props.loadAlbum({id, token: this.props.token})
    }
  }

  goBack () {
    this.props.history.goBack()
  }

  render () {
    const { images = [], year = '', name = '', tracks = [] } = this.props.album
    return (
      <Page>
        <Row>
          <Col size='12'>
            <a href='#' onClick={this.goBack}>
              <FontAwesome name='arrow-left' size='2x' /> Voltar</a>
          </Col>
        </Row>
        <Row>
          <Info images={images} year={year} name={name} />
        </Row>
        <Row>
          <Col size='12'>
            <Tracks tracks={tracks.items} />
          </Col>
        </Row>
        <div className='page__section'>
          <Modal />
        </div>
        <style jsx='true'>{`
          .error {
            color: red;
          }
        `}</style>
      </Page>
    )
  }
}

const mapStateToProps = ({ AlbumReducer, TokenReducer }) => {
  console.log('Album object -> ', AlbumReducer)
  return {
    album: AlbumReducer.album || {},
    loading: AlbumReducer.loading,
    error: AlbumReducer.error,
    token: TokenReducer.token
  }
}

export default connect(mapStateToProps, { loadAlbum })(Album)
