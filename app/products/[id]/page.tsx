import { Button } from "@/app/_components/ui/button";
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { db } from "@/app/_lib/prisma";
import { ArrowDownIcon, ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductImage from "./_components/ProductImage";
import DiscountBadge from "@/app/_components/DiscountBadge";
import ProductDetail from "./_components/ProductDetail";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return notFound();
  }
  return (
    <div className="">
      {/* Imagem do Produto */}
      <ProductImage product={product} />

      <ProductDetail product={product} />
    </div>
  );
}
