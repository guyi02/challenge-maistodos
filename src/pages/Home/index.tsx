import Header from '../../components/Header';
import { VStack } from '@chakra-ui/react';
import ProductList from '../../components/ProductList';
import PaymentForm from '../../components/PaymentForm';

const Home = () => {
  return (
    <VStack>
      <Header />
      {/* <ProductList /> */}
      <PaymentForm />
    </VStack>
  );
};

export default Home;
