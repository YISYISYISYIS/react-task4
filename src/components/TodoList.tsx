import { useEffect, useState } from "react";
import { getCountries } from "../api/countries";
import { Country } from "../types/Country";
import TodoItem from "../components/TodoItem";

const TodoList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(`${error}`);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
      // setCountries(
      //   countries.filter((c) => c.name.common !== country.name.common)
      // );
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
      // setCountries([...countries, country]);
    }
  };

  // console.log(countries);
  return (
    <div>
      <h1 style={{ color: "red" }}>선택 목록</h1>
      <div>
        {selectedCountries.map((country: Country) => {
          return (
            <TodoItem
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
      <h1 style={{ color: " red" }}>나라 목록</h1>
      <div>
        {countries
          .filter(
            (country: Country) =>
              !selectedCountries.find(
                (selectedCountry: Country) =>
                  selectedCountry.name.common === country.name.common
              )
          )
          .map((country: Country) => {
            return (
              <TodoItem
                key={country.name.common}
                country={country}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
