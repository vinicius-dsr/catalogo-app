import { db } from "../_lib/prisma";
import CategoryItem from "./CategoryItem";

export default async function CategoryList() {
  const category = await db.category.findMany({});
  return (
    <div className="flex items-center gap-4">
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
