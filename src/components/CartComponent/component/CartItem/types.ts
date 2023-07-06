import { CartProduct } from '../../../../Store/useCart/types';
export type CartItemProps = CartProduct & {
  fromAdmin?: boolean;
};
