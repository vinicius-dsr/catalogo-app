import { Product } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="h-auto min-w-[200px] space-y-4">
      {/* IMAGE */}
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageURL}
          alt={product.name}
          fill
          className="rounded-2xl bg-zinc-200 object-cover"
        />
        {product.discountPercentage && (
          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="truncate">{product.name}</h2>
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold">
            {formatCurrency(Number(calculateProductTotalPrice(product)))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
