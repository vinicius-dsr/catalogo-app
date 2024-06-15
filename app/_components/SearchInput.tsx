import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Buscar produtos..."
        className="border-none bg-zinc-200"
      />
      <Button size="icon">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
}
