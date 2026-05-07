import { render, screen } from '@testing-library/react'
import App from './App'

describe('VendorRiskOperationsCenter', () => {
  it('renders the executive-grade hero copy', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /run renewals, exceptions, and remediation with one executive-grade control surface/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/critical reviews/i)).toBeInTheDocument()
    expect(screen.getByText(/vendor review desk/i)).toBeInTheDocument()
  })
})
