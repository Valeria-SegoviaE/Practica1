import { obtenerProductos } from './services/productService';
import type { Product } from './models/product';

async function runApp() {
  const products: Product[] = await obtenerProductos();

  if (products.length === 0) {
    console.log('No se encontraron productos.');
    return;
  }

  const candidatos = products
    .filter(({ rating, stock }) => rating >= 4.5 && stock > 10)
    .map(({ title, price, rating, stock }) => ({
      Nombre: title,
      Precio: price,
      Rating: rating,
      Stock: stock
    }));

  console.log('=== PRODUCTOS CANDIDATOS PARA PROMOCIÓN ===');
  console.log(candidatos);

  const totalInventario = products.reduce((acumulado, { price, stock }) => {
    return acumulado + (price * stock);
  }, 0);

  console.log('\n=== VALOR TOTAL DEL INVENTARIO ===');
  console.log(`Valor total del inventario: $${totalInventario.toFixed(2)}`);

}

runApp();