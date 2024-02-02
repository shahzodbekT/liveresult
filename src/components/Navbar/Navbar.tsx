import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type NavbarPropsType = {
  linkText: string;
  path: string;
  navText: string;
};

export const Navbar = ({ linkText, path, navText }: NavbarPropsType) => {
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    // Apply the theme when the component mounts or when the theme changes
    applyTheme(currentTheme);
  }, [currentTheme]);

  const toggleTheme = (): void => {
    // Toggle between 'light' and 'dark' themes
    setCurrentTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    localStorage.setItem('theme', currentTheme)
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
        <button className="btn btn-primary rounded-full" onClick={toggleTheme}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRwySe60204YAV8kgz1CA1hNN_gWJvu7cEg&usqp=CAU"
            alt="theme-icon"
            className="size-6 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};
