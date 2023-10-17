import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import giphy from "../../assets/loading.gif";
// import { DiApple } from "react-icons/di";

const CountryDetails = () => {
  const { name } = useParams();
  const [aCountry, setACountry] = useState();
  const [loading, setLoading] = useState(false);
  const [errorTxt, setErrorTxt] = useState(" ");
  const nav = useNavigate();

  const getCountryDetails = async () => {
    setLoading(true);
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();

    setACountry(data);
    console.log(data);
    if (response) setLoading(false);
    if (response.ok) {
      setACountry(data);
    }
    if (!response.ok) {
      setErrorTxt("Failed to load");
    }
  };

  useEffect(() => {
    getCountryDetails();
  }, []);

  return (
    <div className="container m-auto">
      <div>
        {loading && (
          <img
            className=" fixed top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]"
            src={giphy}
            alt=""
          />
        )}
        {errorTxt && <p> {errorTxt} </p>}

        <div className="w-full m-12 p-6 ">
          <button
            onClick={() => nav(`/`)}
            className=" font-semibold pt-2 pb-2 pl-6 pr-6 rounded-lg cursor-pointer border-4"
          >
            <i className="ri-arrow-left-line pr-2"></i>
            {/* <DiApple /> */}
            Back
          </button>
        </div>
      </div>
      {aCountry &&
        aCountry.map((country) => (
          <div
            className="m-auto pt-20 gap-20 items-center justify-center md:flex overflow-x-hidden"
            key={country.capital}
          >
            <div className=" md:m-max-[1480px] ">
              <img
                src={country.flags.svg}
                alt={`${name} Flag`}
                className="pl-5 pr-5 md:max-w-[550px] "
              />
            </div>
            <div className=" font-bold space-y-8">
              <p className=" text-3xl font-bold mt-5 pl-5 pr-5">
                {country.name.common}
              </p>
              <div className="grid grid-cols-2 pl-5 pr-5 gap-10">
                <p>Region: {country.region}</p>
                <p className=" float-left">Top Level Domain: {country.tld}</p>
              </div>
              <div className="grid grid-cols-2 pl-5 pr-5 gap-10">
                <p>Sub Region: {country.subregion}</p>
                <p className=" float-left">
                  Currencies:{" "}
                  {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
              </div>
              <div className="pl-5 pr-5">
                <p>Capital: {country.capital}</p>
              </div>
              <div className="pl-5 pr-5">
                <div className="flex justify-between">
                  Borders:{" "}
                  {country.borders &&
                    country.borders.map((border) => <p>{border}</p>)}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CountryDetails;
