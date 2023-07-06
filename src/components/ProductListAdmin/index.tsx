import React from 'react';

import { useProductList } from '../../Services/useProduct';
import ItemAdmin from './ItemAdmin';

const ProductListAdmin = () => {
  const { data: products, isSuccess } = useProductList();

  return (
    isSuccess && (
      <>
        {products.map((product) => (
          <>
            <ItemAdmin {...product} />
          </>
        ))}
      </>
    )
  );
};

export default ProductListAdmin;
