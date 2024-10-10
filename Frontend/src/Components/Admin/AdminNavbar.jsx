import logo from "../../assets/images/rohini_logo2.png";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef } from "react";
import avatar from '../../assets/images/avatar-icon.png'

const navLinks = [
  {
    path: "/adminDashboard",
    display: "Home",
  },
  {
    path: "/camps",
    display: "Camps",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const role = localStorage.getItem("role");

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      className="header flex items-center"
      ref={headerRef}
      style={{ padding: '10px 0', position: 'relative' }} // Adjust padding here
    >
      <div className="container">
        <div className="flex items-center justify-between lg:w-[110%] lg:mx-auto">
          {/* Logo */}
          <div className="flex items-center" style={{ marginTop: '10px' }}> {/* Adjust top margin as needed */}
            <img
              src={logo}
              alt="Logo"
              className="h-12" // Adjust height as needed
            />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-4">
            <div className="flex justify-between items-center">
              <figure className="w-[60px] h-[35px] rounded-full cursor-pointer mr-3">
                <img
                  src={avatar}
                  className="w-full h-full rounded-full"
                  alt="Avatar"
                />
              </figure>
              <h2>{role}</h2>
            </div>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
