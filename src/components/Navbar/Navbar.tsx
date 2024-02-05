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
    // Retrieve the theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    // Set the theme to the saved theme or default to 'light'
    setCurrentTheme(savedTheme || "light");

    // Apply the theme when the component mounts or when the theme changes
    applyTheme(savedTheme || "light");
  }, [currentTheme]); // Include currentTheme in the dependency array

  const toggleTheme = (): void => {
    // Toggle between 'light' and 'dark' themes
    setCurrentTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Save the new theme in localStorage
      return newTheme;
    });
  };

  const applyTheme = (theme: string): void => {
    // Apply theme-specific styles here
    document.documentElement.setAttribute("data-theme", theme);
  };

  const handleLogout = (): void => {
    localStorage.setItem("userName", ""); // Set an empty string or handle as needed
    // Additional logic for logout, state update, or redirect can go here
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
                src="https://cdn.images.express.co.uk/img/dynamic/79/590x/secondary/4782404.jpg?r=1685574665586"
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
            {}

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};
