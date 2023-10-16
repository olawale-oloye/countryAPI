import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  return (
    <div className="m-auto">
      <div
        onClick={() => {
          navigate(`/country/${country.name.common}`);
        }}
        key={country.name.common}
        className="border rounded-[10px]  cursor-pointer shadow-md  aspect-[1] mb-4  "
      >
        <img
          src={country.flags.svg}
          alt=""
          className="  object-cover pb-3  rounded-t-[10px] w-[100%] h-[50%]"
        />
        <h1 className="font-semibold px-4">{country.name.common}</h1>
        <h1 className="font-semibold px-4">
          Population: <span className="font-normal">{country.population}</span>
        </h1>
        <h1 className="font-semibold px-4">
          Region: <span className="font-normal">{country.region}</span>
        </h1>
        <h1 className="font-semibold px-4">
          Capital: <span className="font-normal">{country.capital}</span>
        </h1>
      </div>
    </div>
  );
};

export default CountryCard;
