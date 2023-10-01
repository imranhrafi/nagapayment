import MobileNav from "./MobileNav";
import NavButtons from "./nav-buttons";
import { NavItems } from "./nav-items";

const Navbar = () => {
  return (
    <nav className=' relative flex justify-between lg:justify-around items-center mx-10 my-6'>
      <h3 className='basis-1/5 select-none cursor-pointer'>
        <span className='text-primary '>Naga</span>Payments
      </h3>

      <NavItems />

      <div className='basis-1/2 lg:basis-1/5 md:block hidden'>
        <NavButtons />
      </div>
      <div className='lg:hidden basis-1/12 inline'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
