import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import ViewHeader from './ViewHeader'

describe('renders view header', () => {
  it('renders title text', () => {
    // render(<ViewHeader titleText='This is a title' />)
    expect(screen.getByText('This is a title')).toBeInTheDocument()
  })
  it('renders two buttons', () => {
    // render(<ViewHeader titleText='This is a title' />)
    expect(screen.findAllByRole('button'))
  })
})