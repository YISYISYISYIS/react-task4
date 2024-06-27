import { Country } from "../types/Country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const TodoItem: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div onClick={() => handleSelectCountry(country)}>
      <img
        src={country.flags.svg}
        style={{ width: "150px", height: "150px" }}
      />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default TodoItem;
