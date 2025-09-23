import React from "react";
import { NavLink } from "react-router-dom";
 
export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const navItems = [
    { name: "About", to: "/about" },
    { name: "Pricing", to: "/pricing" },
    { name: "Service", to: "/service" },
    { name: "Contact", to: "/contact" }
  ];
 
  return (
    <div className="sticky top-0 z-50 bg-black shadow-lg">
      <nav className="bg-black border-none shadow-none px-4 py-3 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to='/'
            className="text-white text-xl font-bold hover:text-blue-300 transition-all duration-300 hover:scale-110 transform cursor-pointer"
          >
            WORKHUB
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className="text-white hover:text-blue-300 transition-all duration-300 hover:scale-105 transform text-sm font-normal px-2 py-1"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/* Desktop Buttons */}
            <div className="flex items-center gap-2">
              <NavLink to="/login" className="text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:scale-105 transform px-4 py-2 rounded text-sm font-medium">
                Log In
              </NavLink>
              <NavLink to="/singup" className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 transform hover:shadow-lg px-4 py-2 rounded text-sm font-medium">
                Sign Up
              </NavLink>
            </div>
          </div>
          

        </div>
        
        {/* Mobile Navigation - Always Hidden */}
        <div className="hidden">
          <div className="pt-4 pb-2 space-y-2">
            {/* Mobile Nav Items */}
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-white hover:text-blue-300 transition-all duration-300 hover:scale-105 transform text-sm font-normal px-2 py-2 hover:bg-white hover:bg-opacity-5 rounded"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Buttons */}
            <div className="flex flex-col gap-2 pt-4">
              <NavLink to='/login' className="w-full text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 px-4 py-2 rounded text-sm font-medium text-left">
                Log In
              </NavLink>
              <NavLink to='/signup' className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-lg px-4 py-2 rounded text-sm font-medium">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;