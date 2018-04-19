/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'

import Card from '../components/card'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Card
          key='3Rvw51S5aB7G87bLz5hw1t'
          {...{
            id: '3Rvw51S5aB7G87bLz5hw1t',
            name: 'Século Sinistro',
            images: [
              {
                height: 640,
                url:
                  'https://i.scdn.co/image/8f8fac6ace8d5b206e23101c5ecfe70015fba27e',
                width: 640
              },
              {
                height: 300,
                url:
                  'https://i.scdn.co/image/ec9b711714a557bb60e4785cdf718f446691a798',
                width: 300
              },
              {
                height: 64,
                url:
                  'https://i.scdn.co/image/27ae3aefe740b161a6baeb5450126be585b3cc77',
                width: 64
              }
            ]
          }}
        />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
