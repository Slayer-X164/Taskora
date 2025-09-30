import ArrowIcon from '../components/Arrow'
const NavBar = () => {
  return (
     <header className="py-6">
        <nav className="container mx-auto px-6 flex justify-between items-center">
        
          <div className="text-2xl font-bold">
            Taskora
          </div>

        
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>

         
          <button className="hidden md:block px-5 py-2 border rounded-lg font-semibold">
            Download the app
          </button>
        </nav>
      </header>
  )
}

export default NavBar