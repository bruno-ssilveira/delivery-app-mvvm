import { useQuery } from '@tanstack/react-query';
import { getProductsCategories } from '../../../../shared/services/products.service';

export const useHeaderModel = () => {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getProductsCategories,
  });

  return { categories: categories ?? [] };
};
