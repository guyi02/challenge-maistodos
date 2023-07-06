import { Button } from '@chakra-ui/react';
import getStripe from '../../lib/stripe';
import { PaymentButtonProps } from './types';
import { useCart } from '../../Store/useCart';

const PaymentButton = ({ isDisabled }: PaymentButtonProps) => {
  const cartItems = useCart((state) => state.cart);
  async function handleCheckout() {
    const stripe = await getStripe();
    const itemsOnCart = cartItems.map((cartItem) => {
      const newData = {
        price: cartItem.price_id_api,
        quantity: cartItem.qty,
      };
      return newData;
    });

    const { error } = await stripe.redirectToCheckout({
      lineItems: itemsOnCart,
      mode: 'subscription',
      successUrl: `http://localhost:3000/payment-success`,
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
