import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../shared/services/products.service";
import { formatProducts } from "../../shared/utils/product.utils";

export const useHomeModel = () => {
	const perPage = 5;

	const { data } = useInfiniteQuery({
		queryKey: ['products'],
		queryFn: ({ pageParam }) =>
			getProducts({
				page: pageParam,
				perPage,
			}),
		initialPageParam: 1,
		getNextPageParam: () => {
			return 1;
		},
	});

	const products = data?.pages.flatMap((page) => page.items) ?? [];

	const formatedProducts = formatProducts(products);
	
	return {
		products: formatedProducts,
	};
};