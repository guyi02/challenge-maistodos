import {
  Stack,
  Flex,
  IconButton,
  Image,
  Text,
  Center,
  Box,
  Tag,
  Divider,
} from '@chakra-ui/react';

import { ProductDictionary } from '../../dictionary/home';
import { Product as ProductProps } from '../../Services/useProduct/types';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const ProductItem = ({ name, price, image, description }: ProductProps) => {
  return (
    <Stack shadow='md' borderWidth='1px' borderRadius='md' minHeight={200}>
      <Flex flexDirection='column' px={4}>
        <Box data-testid='area-clickable-to-show-details'>
          <Image
            objectFit='contain'
            padding={2}
            width='100%'
            height={{ sm: 300, md: 200 }}
            alt={ProductDictionary.AltImage + name}
            src={image}
          />

          <Center my={2}>
            <Tag bg={'green.200'}>Valor: R${price}</Tag>
          </Center>

          <Center>
            <Text noOfLines={2}>{name}</Text>
          </Center>

          <Center my={2}>
            <Text noOfLines={2} color={'gray.600'}>
              {description}
            </Text>
          </Center>

          <Divider />

          <Flex
            flexDirection='row'
            alignItems={'center'}
            justify={'space-between'}
            p={2}
          >
            <IconButton
              aria-label={'teste'}
              onClick={() => alert('fav')}
              icon={<AiOutlineHeart />}
              title='heart-svg'
            />

            <IconButton
              aria-label={'teste'}
              onClick={() => alert('cart')}
              icon={<FaCartPlus />}
              title='heart-svg'
            />
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
};

export default ProductItem;
