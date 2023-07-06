import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';

import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import RegisterForm from '../../components/RegisterForm';
import ProductListAdmin from '../../components/ProductListAdmin';

const Admin = () => {
  const [editProduct, setEditProduct] = useState<undefined | number>();

  const navigate = useNavigate();

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
              aria-label={'teste'}
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
            >
              Admin Products
            </Text>
          </Flex>
          <Heading>Check out the products in your base </Heading>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <ProductListAdmin handleEdit={(id) => setEditProduct(id)} />
          </Stack>
        </Stack>
        <Flex>
          <Stack spacing={10} pt={2} width={'full'} mt={24}>
            <Heading>New Product</Heading>
            <RegisterForm editProduct={editProduct || 0} />
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Admin;
