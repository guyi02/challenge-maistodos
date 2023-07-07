import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductItem from '../';
import { productMock } from '../utils';

describe('ProductItem component', () => {
  it('should render ProductItem with image src not empty', () => {
    render(<ProductItem {...productMock} />);

    const imgTag = screen.getByTestId(/product-item-image/);
    expect(imgTag).toHaveAttribute('src', productMock.image);
  });
});
