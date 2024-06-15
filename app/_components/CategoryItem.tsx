import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <>
      <Link
        href=""
        className="flex items-center gap-2 rounded-full border px-4 py-2 shadow-md"
      >
        <Image
          src={category.imageURL}
          alt={category.name}
          width={20}
          height={20}
        />
        <span className="text-sm font-semibold">{category.name}</span>
      </Link>
    </>
  );
}
