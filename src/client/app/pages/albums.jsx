import React from 'react'
import Page from '../components/page.jsx'
import InputSearch from '../components/inputSearch'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    }

    render() {
        return <Page>
            <InputSearch />

        </Page>
    }
}
