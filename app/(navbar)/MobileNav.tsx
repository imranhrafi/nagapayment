import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavList } from "./nav-items";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <NavList className='flex flex-col lg:hidden' />
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
