import React from 'react';

import { useProductList } from '../../Services/useProduct';
import ItemAdmin from './ItemAdmin';

const ProductListAdmin = ({
  handleEdit,
}: {
  handleEdit: (id: number) => void;
}) => {
  const { data: products, isSuccess } = useProductList();

  return (
    isSuccess && (
      <>
        {products.map((product) => (
          <>
            <ItemAdmin {...product} handleEdit={(id) => handleEdit(id)} />
          </>
        ))}
      </>
    )
  );
};

export default ProductListAdmin;
