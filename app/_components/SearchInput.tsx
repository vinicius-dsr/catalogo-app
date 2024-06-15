import { Ghost, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    // <div className="flex gap-2">
    //   <Input
    //     placeholder="Buscar produtos..."
    //     className="border-none bg-zinc-200"
    //   />
    //   <Button size="icon">
    //     <SearchIcon size={20} />
    //   </Button>
    // </div>
    <div className="flex items-center">
      <Input className="rounded-full border-none bg-zinc-200 p-6" />
      <Button size="icon" variant="ghost" className="-ml-11 rounded-full">
        <SearchIcon />
      </Button>
    </div>
  );
}
