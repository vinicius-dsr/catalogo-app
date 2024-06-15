import Header from "./_components/Header";
import SearchInput from "./_components/SearchInput";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <SearchInput />
      </div>
    </>
  );
}
