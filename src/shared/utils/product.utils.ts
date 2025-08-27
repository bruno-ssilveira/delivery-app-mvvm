import { Product } from "../interfaces/product";

export const formatProducts = (products: Product[]) => {
	const grouped = products.reduce((acc, product) => {
		const category = product.category;

		if(!acc[category]) {
			acc[category] = [];
		}

		acc[category].push(product);

		return acc;
	}, {} as Record<string, Product[]>);

	return Object.entries(grouped).map(([title, data]) => ({
		title,
		data
	}))
};