import { render, screen } from '@testing-library/react';
import Home from '../';

describe('Home page tests', () => {
  test('should texts contains on H1 tag', () => {
    render(<Home />);
    const linkElement = screen.getByText(/HOME page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
