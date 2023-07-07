import React, { useEffect } from 'react';
import { Container, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Store/useCart';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Payment{' '}
          <Text as={'span'} color={'orange.400'}>
            Successfully
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Your payment has been approved and we will ship your product shortly.
          You can continue shopping on our website.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
            onClick={() => navigate('/')}
          >
            Back to home
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PaymentSuccess;
