 /**
 * @jest-environment jsdom
 */
//import dependencies
import React from 'react'
import { Provider, useDispatch} from 'react-redux'
import { BrowserRouter, useNavigate, useParams } from 'react-router-dom'
//action functions - might not need
import {addBook} from '../../actions/home'

import { screen, render, fireEvent } from '@testing-library/react'

import AddBook from '../AddBook' //component to test

// jest.mock('react-redux') //JV code?

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn()
}))

jest.mock('../../actions/home')

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

const fakeFormData ={
  title: 'A',
  author: 'D',
  genre: 'F',
  publishing_details: 'F',
  edition: 'F',
  isbn: '1',
  summary: 'F',
  condition: 'F',
  image: 'F',
  user_id: 1,
  status: 'active',
  rating: 'l',
}

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
}

//test is the correct book sent to the database?

describe('<AddBook />', () => {

  it('dispatches the addBook thunk when form is submitted', () => {
    useParams.mockReturnValue({id:'1'})
    const navigate = jest.fn()
    useNavigate.mockReturnValue(navigate)
    const addBookMockReturn = () => 'mockReturnFunctionsReturnValue'
    addBook.mockReturnValue(addBookMockReturn)
    render(
        <Provider store={fakeStore}>
          <AddBook />
        </Provider>
    )
    // screen.debug()
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(fakeStore.dispatch).toHaveBeenCalledWith(addBookMockReturn)
  })
})

    // expect.assertions(1)
    //fake an input for payload
    // const input = screen.getAllByRole('textbox')
    // console.log( input[1])
    // fireEvent.change(input[1], {target: {value:'mandy'}})
    // //fake buton click
    // 
