import ArrowIcon from '../components/Arrow'
import CloseIcon from './CloseIcon';
import HamburgerIcon from './HamburgerIcon';
const NavBar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="py-6 relative z-20">
      {/* Add 'relative' to the nav tag to be the positioning context */}
      <nav className="container relative mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl text-[#516CA2] font-bold">
          Taskora
        </div>

        {/* Desktop Navigation Links */}
        {/* These classes will center the element perfectly */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-10 text-gray-600">
          <li><a href="#" className="hover:text-gray-900">Home</a></li>
          <li><a href="#" className="hover:text-gray-900">Features</a></li>
          <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-900">Blog</a></li>
        </ul>

        {/* Desktop CTA Button */}
        <button className="hidden md:block px-6 py-3 shadow-sm shadow-cyan-950/30 bg-neutral-50 text-cyan-950 rounded-full font-medium cursor-pointer hover:bg-neutral-200">
              Download The App
            </button>

        {/* Hamburger Menu Button - Uses props to control state */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;