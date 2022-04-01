// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'


test('sanity', () => {
  expect(true).toBe(true)
})

test('Spinner appears', () => {
  const {queryByText, rerender} = render(<Spinner on={true}/>)
  expect(queryByText(/please wait.../i)).toBeInTheDocument()
  rerender(<Spinner on={false}/>)
  expect(queryByText(/please wait.../i)).not.toBeInTheDocument()
})
