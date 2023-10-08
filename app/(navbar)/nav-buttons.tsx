import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavButtons = () => {
  return (
    <div className='flex items-center justify-end gap-4'>
      <Link href={"/sign-in"}>
        <Button variant={"ghost"}>Sign In</Button>
      </Link>

      <Link href={"/get-started"}>
        <Button variant={"default"}>Get Started</Button>
      </Link>
    </div>
  );
};

export default NavButtons;
