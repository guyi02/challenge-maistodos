import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EmptyState from '../';

describe('EmptyState component', () => {
  const mockText = 'Test';
  it('should render EmptyState with icon in svg', () => {
    render(<EmptyState text={mockText} />);
    const svgTag = screen.getByTitle('empty-svg');

    expect(svgTag).toBeInTheDocument();
  });

  it('should render EmptyState with text message', () => {
    render(<EmptyState text={mockText} />);

    const textTag = screen.getByTestId(/empty-state-message/);
    expect(textTag).toHaveTextContent(mockText);
  });
});
