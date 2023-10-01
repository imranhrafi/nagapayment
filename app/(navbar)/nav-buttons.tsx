import { Button } from "@/components/ui/button";

const NavButtons = () => {
  return (
    <div className='flex justify-end items-center gap-4'>
      <Button variant={"ghost"}>Sign In</Button>
      <Button variant={"default"}>Sign Up</Button>
    </div>
  );
};

export default NavButtons;
