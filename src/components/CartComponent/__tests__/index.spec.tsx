import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CartComponent from '../';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('CartComponent tests', () => {
  it('should render CartComponent with cart text Heading', () => {
    render(<CartComponent />);
    const cartTitle = screen.getByTestId('my-cart-text');

    expect(cartTitle).toHaveTextContent(/My Cart/);
  });
});
