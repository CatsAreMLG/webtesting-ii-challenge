import React from 'react'
import ReactDOM from 'react-dom'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library'
import 'jest-dom/extend-expect'

import App from './App'
import Display from './Display/Display'
import Dashboard from './Dashboard/Dashboard'

it('renders without crashing', () => {
  render(<App />)
  cleanup()
})
it('displays strikes and balls', async () => {
  const { getByText } = render(
    <Display
      score={{
        strike: false,
        ball: false,
        hit: false,
        foul: false,
        struckOut: false,
        walked: false,
        strikes: 3,
        balls: 2
      }}
    />
  )
  const strikes = await waitForElement(() => getByText(/strikes: /i))
  expect(strikes.innerHTML).toEqual('Strikes: 3')
  const balls = await waitForElement(() => getByText(/balls: /i))
  expect(balls.innerHTML).toEqual('Balls: 2')
  cleanup()
})
it('displays strikeouts', async () => {
  const { getByText, getByTestId } = render(
    <Display
      score={{
        strike: false,
        ball: false,
        hit: false,
        foul: false,
        struckOut: true,
        walked: true,
        strikes: 3,
        balls: 4
      }}
    />
  )
  const strikeout = await waitForElement(() => getByTestId('strikeout'))
  expect(strikeout.innerHTML).toEqual('Struck Out!')
  const walk = await waitForElement(() => getByTestId('walked'))
  expect(walk.innerHTML).toEqual('Walked!')
})
