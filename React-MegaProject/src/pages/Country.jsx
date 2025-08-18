import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/ui/Loader";
import {CountryCard} from "../components/Layout/CountryCard";


const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    startTransition(async() =>{
      const res = await getCountryData();
      console.log(res.data);
      setCountries(res.data);
    })
  },[])

  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {
         countries.map((curCountry, index)=>{
          return <CountryCard Country={curCountry} key={index}  />
         })
        }
      </ul>
    </section>
  );
};

export default Country;
