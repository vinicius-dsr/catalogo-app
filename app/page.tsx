import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import Header from "./_components/Header";
import SearchInput from "./_components/SearchInput";

export default function Home() {
  return (
    <>
      {/* Componente Header */}
      <Header />

      <div className="flex flex-col gap-6 px-5">
        {/* Componente Input de Pesquisa */}
        <SearchInput />

        {/* Componente Lista de Categorias */}
        <CategoryList />

        {/* Banner Indicando promoções */}
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
    </>
  );
}
