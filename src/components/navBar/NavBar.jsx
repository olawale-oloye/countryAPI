const NavBar = ({ toggle, setToggle }) => {
  return (
    <div className=" ">
      <div className="absolute shadow-xl h-14 w-full top-0 z-0"></div>
      <div className="flex items-center justify-between m-auto container pt-3 pb-6 pr-5 pl-5">
        <h1 className="font-bold md:text-2xl z-50">Where in the world?</h1>
        <div>
          {toggle === "" ? (
            <div
              className="flex gap-4 items-center text-center "
              onClick={() => setToggle("darkMode")}
            >
              <button className="flex gap-3 z-40">
                <i className="ri-moon-fill md:text-md"></i>
                <p className="text-md">Dark Mode</p>
              </button>
            </div>
          ) : (
            <div
              className="flex gap-4 items-center "
              onClick={() => setToggle("")}
            >
              <button className="flex gap-3 z-50">
                <i className="ri-sun-fill md:text-md"></i>
                <p className="text-md">Light Mode</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
