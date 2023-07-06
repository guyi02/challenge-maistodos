import { Flex, Box, Stack, Heading, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import RegisterForm from '../../components/RegisterForm';

const Register = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <RegisterForm />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
