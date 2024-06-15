"use client";

import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageURL">;
}

export default function ProductImage({ product }: ProductImageProps) {
  const rounter = useRouter();
  const handleBackClick = () => rounter.back();
  return (
    <div className="relative h-[360px] w-full bg-zinc-200">
      <Image
        src={product?.imageURL}
        alt={product?.name}
        fill
        className="object-contain"
      />
      <Button
        className="absolute left-4 top-4 rounded-full"
        size="icon"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon className="" />
      </Button>
    </div>
  );
}
