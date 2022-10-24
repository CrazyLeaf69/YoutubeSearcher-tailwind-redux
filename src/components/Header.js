import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setResults } from "../features/counterSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${e.target.query.value}&type=video&maxResults=20&key=${process.env.REACT_APP_YT_KEY}`
    );
    const parsed = await result.json();

    dispatch(setResults(parsed));

    if (window.location !== "/") {
      navigate("/");
    }
  };

  return (
    <header className="flex justify-center items-center relative p-4 bg-lime-100 dark:bg-gray-900">
      <form
        autoComplete="off"
        onSubmit={handleSearch}
        className="border-2 border-red-600 rounded-2xl p-2 gap-2 w-4/5 md:w-3/5 lg:w-2/5 flex justify-between center"
      >
        <input
          type="input"
          name="query"
          placeholder="Search..."
          className="bg-transparent focus:bg-transparent focus:outline-none placeholder-black dark:placeholder-white dark:text-white w-11/12"
        />
        <button type="submit">
          <FaSearch size="20" color={darkTheme ? "white" : ""} />
        </button>
      </form>
      <span onClick={handleMode} className="absolute right-0 lg:right-2">
        {darkTheme ? (
          <FaSun size="24" className="top-navigation-icon" />
        ) : (
          <FaMoon size="24" className="top-navigation-icon" />
        )}
      </span>
    </header>
  );
};

export default Header;
