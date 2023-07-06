import React from 'react';
import { useProductList } from '../../Services/useProduct';

import { SimpleGrid, GridItem, Box, Skeleton } from '@chakra-ui/react';
import EmptyState from '../EmptyState';
import ProductItem from '../ProductItem';
import { EmptyStateTexts } from '../../dictionary/home';
import { useCart } from '../../Store/useCart';

const ProductList = () => {
  const { data: products, isSuccess, isLoading, isFetching } = useProductList();

  return (
    isSuccess && (
      <Box maxWidth={1080} px={[4, 0]}>
        {!isSuccess && isLoading ? (
          <EmptyState text={EmptyStateTexts.messageEmptyFavotiteList} />
        ) : (
          <>
            <SimpleGrid
              columns={{ sm: 1, md: 3, lg: 4 }}
              spacing='16px'
              width={{
                sm: '100%',
                md: 'auto',
              }}
            >
              {isLoading || isFetching
                ? Array(12)
                    .fill(null)
                    .map((_, index) => (
                      <GridItem key={'skeleton-key-' + index}>
                        <Skeleton
                          minHeight={250}
                          minWidth={['350px', '260px']}
                        />
                      </GridItem>
                    ))
                : products.map((product) => (
                    <GridItem key={product.id}>
                      <ProductItem {...product} />
                    </GridItem>
                  ))}
            </SimpleGrid>
          </>
        )}
      </Box>
    )
  );
};

export default ProductList;
