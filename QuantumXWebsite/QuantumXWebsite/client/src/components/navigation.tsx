import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#features" className="hover:text-[#7289DA] transition-colors">
        Features
      </a>
      <a href="#download" className="hover:text-[#7289DA] transition-colors">
        Download
      </a>
      <a href="#team" className="hover:text-[#7289DA] transition-colors">
        Team
      </a>
      <a
        href="https://dsc.gg/getquantumx"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#7289DA] transition-colors"
      >
        Discord
      </a>
    </>
  );

  return (
    <nav className="fixed w-full bg-[#2C2F33]/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-white hover:text-[#7289DA] transition-colors">
            QuantumV3
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#2C2F33] border-[#99AAB5]/20">
            <div className="flex flex-col gap-4 mt-8">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}