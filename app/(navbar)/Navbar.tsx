import MobileNav from "./MobileNav";
import NavButtons from "./nav-buttons";
import { NavList } from "./nav-items";

const Navbar = () => {
  return (
    <nav className='relative flex items-center justify-between mx-10 my-6 lg:justify-around'>
      <h3 className='cursor-pointer select-none basis-1/5'>
        <span className='text-primary '>Naga</span>Payments
      </h3>

      <NavList />

      <div className='hidden basis-1/2 lg:basis-1/5 md:block'>
        <NavButtons />
      </div>
      <div className='inline lg:hidden basis-1/12'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
