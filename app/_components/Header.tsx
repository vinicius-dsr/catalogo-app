import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <Link href="">
          <Image src="/icon.png" alt="" height={30} width={30} />
        </Link>
        <Button variant={"ghost"}>
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
}
