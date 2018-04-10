/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer';

import Input from '../components/input'

it('renders correctly', () => {
  const tree = renderer
    .create(<Input
      id='token-spotify'
      placeholder='Comece a escrever...'
      label='Informe o Token do Spotify'
      change={(value) => console.log(value)}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
