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
  price_id_api,
}: CartItemProps) => {
  const updateQty = useCart((state) => state.updateQty);
  return (
    <Stack direction={'row'} align={'center'}>
      <Image
        rounded={'md'}
        alt={'feature image'}
        src={image}
        w={'10'}
        h={'10'}
        objectFit={'contain'}
      />

      <Stack>
        <Text fontWeight={600}>{name}</Text>
        <Text fontWeight={300} fontSize={'small'} color={'gray.400'}>
          {description}
        </Text>

        <Text fontWeight={700}>R$ {price}</Text>
      </Stack>

      <Flex direction={'row'} marginLeft={'auto'} align={'center'}>
        <IconButton
          mx={6}
          aria-label={'minus-svg'}
          onClick={() => {
            updateQty({
              id,
              name,
              description,
              qty: qty === 1 ? 0 : Number(qty) - 1,
              image,
              price,
              price_id_api,
            });
          }}
          icon={<FaMinus />}
          title='minus-svg'
        />
        <Text>{qty}</Text>
        <IconButton
          mx={6}
          aria-label={'plus-svg'}
          onClick={() => {
            updateQty({
              id,
              name,
              description,
              qty: Number(qty) + 1,
              image,
              price,
              price_id_api,
            });
          }}
          icon={<FaPlus />}
          title='plus-svg'
        />
      </Flex>
    </Stack>
  );
};

export default CartItem;
