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
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <NavList className='flex flex-col p-0 m-0 lg:hidden' />
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
