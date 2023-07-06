import { Image, Flex, Text, Stack, IconButton } from '@chakra-ui/react';

import { FaPenAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { ItemAdminProps } from './types';
import { useDeleteProduct } from '../../../Services/useProduct';
import { useCallback } from 'react';

const ItemAdmin = ({
  id,
  name,
  description,
  image,
  price,
  handleEdit,
}: ItemAdminProps) => {
  const mutation = useDeleteProduct();

  const handleDeleteItem = useCallback(
    (id: number) => {
      mutation.mutate(id);
    },
    [mutation]
  );

  return (
    <Stack direction={'row'} align={'center'} my={4}>
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
          aria-label={'teste'}
          onClick={() => handleEdit(id)}
          icon={<FaPenAlt />}
          title='heart-svg'
          bg={'yellow.200'}
        />
        {''}
        <IconButton
          mx={6}
          aria-label={'teste'}
          onClick={() => handleDeleteItem(id)}
          icon={<AiOutlineClose />}
          title='heart-svg'
          bg={'red.200'}
        />
      </Flex>
    </Stack>
  );
};

export default ItemAdmin;
