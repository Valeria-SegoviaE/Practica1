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

  const reporteDescuentos = products.map(({ title, price, discountPercentage }) => {
    const finalPrice = price - (price * (discountPercentage / 100));
    return {
      title,
      originalPrice: price,
      discountPercentage,
      finalPrice: parseFloat(finalPrice.toFixed(2))
    };
  });

  console.log('\n=== REPORTE DE PRECIOS CON DESCUENTO ===');
  console.log(reporteDescuentos);

  const conteoCategorias = products.reduce<Record<string, number>>((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  console.log('\n=== PRODUCTOS POR CATEGORIA ===');
  console.log(conteoCategorias);
}


runApp();