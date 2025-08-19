import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import SearchFilter from "../components/ui/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }
  const filterCountries = countries.filter((country) => {
    return (
      (!search ||
        country.name.common.toLowerCase().includes(search.toLowerCase())) &&
      (filter.toLowerCase() === "all" || country.region === filter)
    );
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry) => (
          <CountryCard Country={curCountry} key={curCountry.name.common} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
