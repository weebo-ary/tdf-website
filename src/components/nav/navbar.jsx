import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/2.svg";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      
      <header className="bg-black">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-28 items-center justify-between">
            <div className="lg:w-1/5">
              <img src={Logo} alt="Logo TheDigitalFlix" className="" title="Logo TheDigitalFlix"/>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <div className="flex items-center gap-6 text-md">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out "
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Explore
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Contact
                  </NavLink>
                </div>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition ease-in-out duration-500"
                  href="#"
                >
                  Download Brouchure
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {isOpen ? <FaX /> : <FaBars />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <>
            <div className=" md:block h-auto">
              <nav aria-label="Global">
                <div className="grid grid-cols-1 w-full text-center items-start p-5 gap-6 text-md">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Explore
                  </NavLink>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-600 border-b-2 border-red-600 transition ease-in-out -mt-2"
                        : "transition ease-in-out text-white hover:text-red-600 hover:border-b-2 hover:border-red-600 duration-500"
                    }
                  >
                    Contact
                  </NavLink>
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition ease-in-out duration-500"
                      href="#"
                    >
                      Download Brouchure
                    </a>
                  </div>
                </div>
                
              </nav>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default Navbar;
