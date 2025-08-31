import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '../../shared/services/products.service';
import { formatProducts } from '../../shared/utils/product.utils';
import { useState } from 'react';

export const useHomeModel = () => {
  const perPage = 7;

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  const { data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['products'],
      queryFn: ({ pageParam }) =>
        getProducts({
          page: pageParam,
          perPage,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (!lastPage || lastPageParam >= lastPage.totalPages) {
          return undefined;
        }
        return lastPageParam + 1;
      },
    });

  const products = data?.pages.flatMap((page) => page.items) ?? [];

  const formatedProducts = formatProducts(products);

  const handleCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(undefined);
    } else {
      setSelectedCategory(category);
    }
  };

  return {
    products: formatedProducts,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    handleCategory,
    selectedCategory,
  };
};
