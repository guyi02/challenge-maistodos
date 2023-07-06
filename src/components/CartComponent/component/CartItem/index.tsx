import { Image, Flex, Text, Stack, IconButton } from '@chakra-ui/react';

import { FaPlus, FaMinus } from 'react-icons/fa';

import { CartItemProps } from './types';
import { useCart } from '../../../../Store/useCart';

const CartItem = ({
  id,
  name,
  description,
  qty,
  image,
  price,
}: CartItemProps) => {
  const updateQty = useCart((state) => state.updateQty);
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={20} h={20} align={'center'} justify={'center'} rounded={'full'}>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={image}
          objectFit={'cover'}
        />
      </Flex>
      <Stack>
        <Text fontWeight={600}>{name}</Text>
        <Text fontWeight={300} fontSize={'small'} color={'gray.400'}>
          {description}
        </Text>
      </Stack>

      <Flex direction={'row'} marginLeft={'auto'} align={'center'}>
        <IconButton
          mx={6}
          aria-label={'teste'}
          onClick={() => {
            updateQty({
              id,
              name,
              description,
              qty: qty === 1 ? 0 : Number(qty) - 1,
              image,
              price,
            });
          }}
          icon={<FaMinus />}
          title='heart-svg'
        />
        <Text>{qty}</Text>
        <IconButton
          mx={6}
          aria-label={'teste'}
          onClick={() => {
            updateQty({
              id,
              name,
              description,
              qty: Number(qty) + 1,
              image,
              price,
            });
          }}
          icon={<FaPlus />}
          title='heart-svg'
        />
      </Flex>
    </Stack>
  );
};

export default CartItem;
