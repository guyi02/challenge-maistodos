import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Button,
  Divider,
} from '@chakra-ui/react';
import CartItem from './component/CartItem';

const CartComponent = () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            My Cart
          </Text>
          <Heading>Check out the products in your cart </Heading>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            {[1, 2, 3].map(() => (
              <>
                <CartItem text={'Business Planning'} />
              </>
            ))}
          </Stack>
        </Stack>
        <Flex>
          <Stack spacing={10} pt={2} width={'full'} mt={24}>
            <Flex direction={'row'} align={'center'} justify={'space-between'}>
              <Heading>Total:</Heading>
              <Text fontSize={'3xl'}>R$ 1548</Text>
            </Flex>
            <Divider />
            <Button
              onClick={() => alert('pay')}
              loadingText='Submitting'
              size='lg'
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Pay
            </Button>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default CartComponent;
