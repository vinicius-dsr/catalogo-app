import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import Header from "./_components/Header";
import SearchInput from "./_components/SearchInput";
import ProductList from "./_components/ProductList";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Componente Header */}
      <Header />

      {/* Componente Input de Pesquisa */}
      <div className="px-5 pt-6">
        <SearchInput />
      </div>

      {/* Componente Lista de Categorias */}
      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      {/* Banner Indicando promoções */}
      <div className="px-5 pt-6">
        <Image
          src="/banner.png"
          alt="Promo Banner"
          width={0}
          height={0}
          quality={100}
          className="h-auto w-full rounded-2xl"
          sizes="100vw"
        />
      </div>

      {/* Lista de Produtos com Desconto */}
      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Produtos na promoção</h2>
          <Button variant="link" className="p-0 text-primary">
            Ver todos
            <ChevronRightIcon size={16} className="ml-1.5" />
          </Button>
        </div>
        <ProductList />
      </div>
    </>
  );
}
