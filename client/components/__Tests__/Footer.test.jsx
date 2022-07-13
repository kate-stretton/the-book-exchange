 /**
 * @jest-environment jsdom
 */

import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Footer from '../Footer'

describe('<Footer/>', () => {
  it('renders a <p> tag that includes "The Book Exchange"', () => {
    render(<Footer />)
    expect.assertions(2)
    // expect(screen.getAllByText(/The Book Exchange/)).toBeInTheDocument();
    const p = screen.getAllByText(/The Book Exchange/)
    console.log(p[0])
    // const footer = screen.getByRole('footer')
    // expect(footer).toContainHTML('p')
    expect(p[0]).not.toBeNull()
    expect(p[0]).toHaveTextContent('The Book Exchange')
    
  })
})