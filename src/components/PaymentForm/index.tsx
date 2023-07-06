import getStripe from '../../lib/stripe';

const PaymentForm = () => {
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
      cancelUrl: `http://localhost:3000/`,
      customerEmail: 'customer@email.com',
    });

    if (error) {
      alert(error.message);
    }
  }

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default PaymentForm;
