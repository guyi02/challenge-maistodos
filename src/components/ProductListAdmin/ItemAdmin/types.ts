import { ProductResponse } from '../../../Services/useProduct/types';

export type ItemAdminProps = ProductResponse & {
  handleEdit: (id: number) => void;
};
