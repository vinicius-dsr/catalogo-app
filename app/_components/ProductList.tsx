import { db } from "../_lib/prisma";
import ProductItem from "./ProductItem";

export default async function ProductList() {
  const product = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
