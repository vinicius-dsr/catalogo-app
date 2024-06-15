import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-2">
      <Link href="">
        <Image src="/icon.png" alt="" height={30} width={30} />
      </Link>
      <Button variant={"ghost"} size={"icon"}>
        <MenuIcon />
      </Button>
    </header>
  );
}
