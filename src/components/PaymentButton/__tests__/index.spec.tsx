import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PaymentButton from '../';

describe('PaymentButton component', () => {
  it('should render PaymentButton not disabled with Text iqual to Pay', () => {
    render(<PaymentButton isDisabled={false} />);

    const textButton = screen.getByTestId(/payment-button/);
    expect(textButton).toHaveTextContent('Pay');
  });

  it('should render PaymentButton with disabled active', () => {
    render(<PaymentButton isDisabled={true} />);

    const buttonPaymentStatus = screen.getByTestId(/payment-button/);
    expect(buttonPaymentStatus).toBeDisabled();
  });
});
