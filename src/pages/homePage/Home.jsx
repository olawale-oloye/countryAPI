import { useEffect, useState } from "react";
import CountryCard from "../../components/countryCard/CountryCard";
import giphy from "../../assets/giphy.gif";

const Home = () => {
  const [allCountries, setAllCountries] = useState();
  const [loading, setLoading] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [region, setRegion] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");

  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

  const countryByRegion = async (region) => {
    setAllCountries([]);
    setRegion(false);
    if (region === "All") {
      getAllCountries();
      return;
    } else {
      setLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const selectedRegion = await response.json();
      console.log(selectedRegion);

      if (response) setLoading(false);
      if (response.ok) {
        setAllCountries(selectedRegion);
      }
      if (!response.ok) {
        setErrorTxt(`Reload your browser`);
      }
    }
  };

  const getAllCountries = async () => {
    setLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    if (response) setLoading(false);
    if (response.ok) {
      setAllCountries(data);
    }
    if (!response.ok) {
      setErrorTxt(`Reload your browser`);
    }

    // console.log(data);
  };
  useEffect(() => {
    getAllCountries();
  }, []);

  // console.log(allCountries);
  console.log(searchTxt);

  // {allUsers && allUsers.filter(user => user.first_name
  //   .toLowerCase().includes(userQuerySearch) || user.email
  //   .toLowerCase().includes(userQuerySearch) || user.last_name
  //   .toLowerCase().includes(userQuerySearch) || user.date_joined
  //   .toLowerCase().includes(userQuerySearch)
  //   )
  //   .map((user, index) =>{
  //       return(
  //       <tr className='cursor-pointer hover:bg-slate-200' onClick={() => navigate(`/userdetails/${user.id}`)}>
  //           <td>{index + 1}</td>
  //           <td>{user.first_name}</td>
  //           <td>{user.last_name}</td>
  //           <td>{user.email}</td>
  //           <td>{(user.is_verified).toString()}</td>
  //           <td>{user.date_joined}</td>
  //       </tr>
  //   )})}

  return (
    <div>
      <div className=" sm:block   justify-between container m-auto pt-8 pr-5 pl-5 md:flex  gap-2">
        <div className="  relative justify-center text-center">
          <input
            type="text"
            className="w-[400px] shadow-md h-8 outline-none pl-8 text-xs rounded-md text-black"
            placeholder={"Search for a country or region"}
            onChange={(e) => setSearchTxt(e.target.value)}
            value={searchTxt}
          />
          <i className="ri-search-2-line absolute top-1 left-2 text-black "></i>
        </div>
        <div className="flex relative">
          <div className="p-2 rounded-md shadow-xl">
            <p onClick={() => setRegion(!region)}>
              Filter by Region <i className="ri-arrow-down-s-fill pl-"></i>
            </p>

            {region && (
              <div className="regionDrop absolute bg-white rounded-md w-[100%] border border-black pl-2 shadow-sm">
                {regions.map((region) => (
                  <p
                    onClick={() => countryByRegion(region)}
                    className=" cursor-pointer my-2"
                  >
                    {region}{" "}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid container  justify-items-center m-auto  pt-12 overflow-hidden pr-5 pl-5 grid-cols-1 gap-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4 ">
        {allCountries &&
          allCountries
            .filter(
              (country) =>
                country.name.official
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase()) ||
                country.region.toLowerCase().includes(searchTxt.toLowerCase())
            )
            .map((country) => (
              <CountryCard key={country.name.official} country={country} />
            ))}
      </div>
      {loading && (
        <img
          className=" fixed top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]"
          src={giphy}
          alt=""
        />
      )}
      {errorTxt && <p> {errorTxt} </p>}
    </div>
  );
};

export default Home;
