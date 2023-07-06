import { Button } from '@chakra-ui/react';
import getStripe from '../../lib/stripe';
import { PaymentButtonProps } from './types';

const PaymentButton = ({ isDisabled }: PaymentButtonProps) => {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1NQetULvJyV6bQCEZ0p6IRB7',
          quantity: 3,
        },
      ],
      mode: 'subscription',
      successUrl: `http://localhost:3000/login`,
      cancelUrl: `http://localhost:3000/cart`,
      customerEmail: 'customer@email.com',
    });

    if (error) {
      alert(error.message);
    }
  }

  return (
    <Button
      isDisabled={isDisabled}
      onClick={handleCheckout}
      loadingText='Submitting'
      size='lg'
      bg={isDisabled ? 'gray.400' : 'blue.400'}
      color={'white'}
      _hover={{
        bg: isDisabled ? 'gray.500' : 'blue.500',
      }}
    >
      Pay
    </Button>
  );
};

export default PaymentButton;
