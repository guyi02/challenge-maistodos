import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../../components/Header';
import { HeaderDictionary } from '../../../dictionary/home';

describe('Header component', () => {
  it('should render Header with H1 text', () => {
    render(<Header />);
    expect(screen.getByText(HeaderDictionary.HeadlingText)).toBeInTheDocument();
  });

  // it('should render Header with Icon button to show favorites count', () => {
  //   render(<Header />);
  //   expect(
  //     screen.getByLabelText(HeaderDictionary.AriaLabelDrawer)
  //   ).toBeInTheDocument();
  // });

  // it('should Header component open drawer after click', () => {
  //   render(<Header />);
  //   const areaToClick = screen.getByLabelText(HeaderDictionary.AriaLabelDrawer);
  //   fireEvent.click(areaToClick);
  //   const drawer = screen.getByText(HeaderDictionary.DrawerTitle);
  //   expect(drawer).toBeInTheDocument();
  // });

  // it('should render Header with Icon button to toggle theme', () => {
  //   render(<Header />);
  //   expect(
  //     screen.getByLabelText(HeaderDictionary.AriaLabelTheme)
  //   ).toBeInTheDocument();
  // });
});
