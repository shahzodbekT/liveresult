import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type NavbarPropsType = {
  linkText: string;
  path: string;
  navText: string;
  className?: string;
};

export const Navbar = ({
  linkText,
  path,
  navText,
  className,
}: NavbarPropsType) => {
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    setCurrentTheme(savedTheme || "light");

    applyTheme(savedTheme || "light");
  }, [currentTheme]);

  const toggleTheme = (): void => {
    setCurrentTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const applyTheme = (theme: string): void => {
    // Apply theme-specific styles here
    document.documentElement.setAttribute("data-theme", theme);
  };

  const handleLogout = (): void => {
    localStorage.setItem("userName", "");
  };

  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={path}>
          {navText}
        </Link>
      </div>
      <div className="flex-none gap-2 flex items-center">
        {localStorage.getItem("userName")}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full overflow-hidden">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpl7Iu7QmeFjxM-t-bsz8WFcqwYnr3Fz-4rnCXutPFtQ&s"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <Link to={path}>
              <li>
                <a className="justify-between">{linkText}</a>
              </li>
            </Link>
            <Link to="/">
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={toggleTheme}>
          <label className="swap swap-rotate">
            {/* sun icon */}
            <svg
              className="fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};
