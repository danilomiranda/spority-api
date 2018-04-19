import React from 'react'
import { connect } from 'react-redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft'

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
      this.props.loadAlbum({ id, token: this.props.token })
    }
  }

  goBack () {
    this.props.history.goBack()
  }

  render () {
    const {
      images = [],
      /* eslint-disable-next-line camelcase  */
      release_date = '',
      name = '',
      artists = [],
      tracks = []
    } = this.props.album
    return (
      <Page>
        <Row>
          <Col size='12'>
            <a href='#' onClick={this.goBack} className='back_button'>
              <FontAwesomeIcon icon={faArrowLeft} /> Voltar
            </a>
          </Col>
        </Row>
        <Row>
          <Info
            images={images}
            /* eslint-disable-next-line camelcase  */
            release_date={release_date}
            name={name}
            artist={artists}
          />
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
          .back_button {
            color: FAFAFA;
            text-decoration: none;
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
