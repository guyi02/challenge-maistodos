import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  IconButton,
  useColorModeValue,
  Button,
  Divider,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';

import { FaPlus, FaMinus } from 'react-icons/fa';

interface FeatureProps {
  text: string;
}

const CartItem = ({ text }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={20} h={20} align={'center'} justify={'center'} rounded={'full'}>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={
            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          objectFit={'cover'}
        />
      </Flex>
      <Stack>
        <Text fontWeight={600}>{text}</Text>
        <Text fontWeight={300} color={'gray.400'}>
          minha descição
        </Text>
      </Stack>

      <Flex direction={'row'} marginLeft={'auto'} align={'center'}>
        <IconButton
          mx={6}
          aria-label={'teste'}
          onClick={() => alert('plus')}
          icon={<FaMinus />}
          title='heart-svg'
        />
        <Text>1</Text>
        <IconButton
          mx={6}
          aria-label={'teste'}
          onClick={() => alert('plus')}
          icon={<FaPlus />}
          title='heart-svg'
        />
      </Flex>
    </Stack>
  );
};

const Cart = () => {
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

export default Cart;
