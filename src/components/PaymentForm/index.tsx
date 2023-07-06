import getStripe from '../../lib/stripe';

const PaymentForm = () => {
  async function handleCheckout() {
    console.log('ydsgysgd', process.env.NEXT_PUBLIC_STRIPE_PRICE_ID);

    // const stripe = await getStripe();
    // const { error } = await stripe.redirectToCheckout({
    //   lineItems: [
    //     {
    //       price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
    //       quantity: 3,
    //     },
    //   ],
    //   mode: 'subscription',
    //   successUrl: `http://localhost:3000/login`,
    //   cancelUrl: `http://localhost:3000/`,
    //   customerEmail: 'customer@email.com',
    // });

    // if (error) {
    //   alert(error.message);
    // }
  }

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default PaymentForm;
