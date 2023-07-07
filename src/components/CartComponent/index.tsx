import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import CartItem from './component/CartItem';
import { useCart } from '../../Store/useCart';
import PaymentButton from '../PaymentButton';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const CartComponent = () => {
  const navigate = useNavigate();
  const cartProducts = useCart((state) => state.cart);
  const totalValue =
    cartProducts.length > 0
      ? cartProducts
          .map((cartProduct) => cartProduct.price * cartProduct.qty)
          .reduce((total, item) => total + item)
      : 0;

  const goBack = useCallback(() => {
    return navigate('/');
  }, [navigate]);

  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Flex direction={'row'}>
            <IconButton
              mr={6}
              aria-label={'cart-svg'}
              onClick={goBack}
              icon={<FaArrowLeft />}
              title='cart-svg'
            />
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}
              data-testid='my-cart-text'
            >
              My Cart
            </Text>
          </Flex>
          <Heading>Check out the products in your cart </Heading>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            {cartProducts.map((cartProps) => (
              <>
                <CartItem {...cartProps} />
              </>
            ))}
          </Stack>
        </Stack>
        <Flex>
          <Stack spacing={10} pt={2} width={'full'} mt={24}>
            <Flex direction={'row'} align={'center'} justify={'space-between'}>
              <Heading>Total:</Heading>
              <Text fontSize={'3xl'}>R$ {totalValue}</Text>
            </Flex>

            <Divider />

            <PaymentButton isDisabled={cartProducts.length === 0} />
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default CartComponent;
