import { Product } from "../product";

export interface GetProductsResponse {
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
	items: Product[];
}