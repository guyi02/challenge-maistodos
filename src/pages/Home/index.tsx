import Header from '../../components/Header';
import { VStack } from '@chakra-ui/react';
import ProductList from '../../components/ProductList';

const Home = () => {
  return (
    <VStack>
      <Header />
      <ProductList />
    </VStack>
  );
};

export default Home;
