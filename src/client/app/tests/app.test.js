/* global describe it expect */
import React from 'react'

import App from '../components/app'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('render component without crash', () => {
    const component = shallow(<App />)
    expect(component).toHaveLength(1)
  })
})
