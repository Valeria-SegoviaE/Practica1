import type { Product } from "../models/product";

interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export const obtenerProductos = async (): Promise<Product[]> => {
    const respuesta = await fetch("https://dummyjson.com/products");

    if (!respuesta.ok) {
        throw new Error("Error al obtener los productos");
    }

    const datos: ProductsResponse = await respuesta.json();

    return datos.products;
};