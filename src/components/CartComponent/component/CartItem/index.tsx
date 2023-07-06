import { Image, Flex, Text, Stack, IconButton } from '@chakra-ui/react';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { CartItemProps } from './types';

const CartItem = ({ text }: CartItemProps) => {
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

export default CartItem;
