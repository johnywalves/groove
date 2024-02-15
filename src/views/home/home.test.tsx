import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import manifest from '../../../public/manifest.json'

import Home from '.'

describe('<HomeView />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home />)

    expect(
      screen.getByRole('heading', { name: manifest.name })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
