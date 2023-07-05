import { Stack, Flex, Image, Text, Center, Tag, Box } from '@chakra-ui/react';

import { BookCardDictionary } from '../../dictionary/home';
import { Product as ProductProps } from '../../Services/useProduct/types';

const BookCard = ({ name, price, image }: ProductProps) => {
  return (
    <Stack shadow='md' borderWidth='1px' borderRadius='md' minHeight={300}>
      <Flex flexDirection='column'>
        <Box
          onClick={() => alert('teste')}
          cursor='pointer'
          data-testid='area-clickable-to-show-details'
        >
          <Image
            objectFit='contain'
            marginTop={4}
            width='100%'
            height={{ sm: 300, md: 200 }}
            alt={BookCardDictionary.AltImage + name}
            src={image}
          />
          <Center p={4} minHeight='80px'>
            <Text noOfLines={2}>{price}</Text>
          </Center>
        </Box>
        <Flex flexDirection='row' justifyContent='space-between' px={4}>
          <Tag size='sm' variant='subtle' data-testid='category-tag'>
            {name}
          </Tag>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default BookCard;
