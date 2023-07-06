import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      'pk_test_51NQeBqLvJyV6bQCEOsaTFu9AjpaxmUyZNKTqNwl3ptGEnR3unIlilEq2PNQVcS2fyv5ldcaG2ML1g0D3rgEGYXUz00LIdqN4WV'
    );
  }
  return stripePromise;
};

export default getStripe;
