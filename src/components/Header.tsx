"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="z-50 w-full sticky top-0 bg-background">
      <nav className="hidden md:flex justify-center space-x-2 p-4">
        <Link href="/">
          <Button
            variant={usePathname() === "/" ? "default" : "ghost"}
            className="rounded-full"
          >
            HOME
          </Button>
        </Link>
        <Link href="/about">
          <Button
            variant={usePathname() === "/about" ? "default" : "ghost"}
            className="rounded-full"
          >
            ABOUT US
          </Button>
        </Link>
        <Link href="/services">
          <Button
            variant={usePathname() === "/services" ? "default" : "ghost"}
            className="rounded-full"
          >
            SERVICES
          </Button>
        </Link>
        <Link href="/portfolio">
          <Button
            variant={usePathname() === "/portfolio" ? "default" : "ghost"}
            className="rounded-full"
          >
            PORTFOLIO
          </Button>
        </Link>
        <Link href="/news">
          <Button
            variant={usePathname() === "/news" ? "default" : "ghost"}
            className="rounded-full"
          >
            NEWS
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant={usePathname() === "/contact" ? "default" : "ghost"}
            className="rounded-full"
          >
            CONTACT
          </Button>
        </Link>
      </nav>
      <nav className="flex md:hidden justify-start space-x-2 p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[max-content]">
            <SheetHeader className="flex flex-col space-y-2 justify-center items-center">
              <SheetTitle className="my-6 text-xl font-bold">
                Interioz
              </SheetTitle>
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant={usePathname() === "/" ? "default" : "ghost"}
                    className="rounded-full"
                  >
                    HOME
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about">
                  <Button
                    variant={usePathname() === "/about" ? "default" : "ghost"}
                    className="rounded-full"
                  >
                    ABOUT US
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/services">
                  <Button
                    variant={
                      usePathname() === "/services" ? "default" : "ghost"
                    }
                    className="rounded-full"
                  >
                    SERVICES
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/portfolio">
                  <Button
                    variant={
                      usePathname() === "/portfolio" ? "default" : "ghost"
                    }
                    className="rounded-full"
                  >
                    PORTFOLIO
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/news">
                  <Button
                    variant={usePathname() === "/news" ? "default" : "ghost"}
                    className="rounded-full"
                  >
                    NEWS
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact">
                  <Button
                    variant={usePathname() === "/contact" ? "default" : "ghost"}
                    className="rounded-full"
                  >
                    CONTACT
                  </Button>
                </Link>
              </SheetClose>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default Header;
