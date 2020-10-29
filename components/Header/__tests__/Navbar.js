import React from 'react'
import {render, screen} from '@testing-library/react'
import Navbar from '../Navbar'
import {mockNextUseRouter} from '../../../tests/router-mock'

beforeAll(() => {
  mockNextUseRouter({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
  })
})

test('render navbar', () => {
  render(<Navbar />)

  expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  expect(screen.getByRole('link', {name: /blog/i})).toBeInTheDocument()
  expect(screen.getByRole('link', {name: /about/i})).toBeInTheDocument()
})
