import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../../components/Header';
import { HeaderDictionary } from '../../../dictionary/home';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header component', () => {
  it('should render Header with H1 text', () => {
    render(<Header />);
    expect(screen.getByText(HeaderDictionary.HeadlingText)).toBeInTheDocument();
  });

  it('should render Header with Icon button to show favorites count', () => {
    render(<Header />);
    expect(screen.getByTitle('heart-svg')).toBeInTheDocument();
  });

  it('should Header component open drawer after click', () => {
    render(<Header />);
    const icon = screen.getByTitle('heart-svg');
    fireEvent.click(icon);
    const drawer = screen.getByText(HeaderDictionary.DrawerTitle);
    expect(drawer).toBeInTheDocument();
  });
});
