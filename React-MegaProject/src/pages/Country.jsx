import { useEffect, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/ui/Loader";


const Country = () => {
  const [isPending, startTransition] = useTransition();
  useEffect(()=>{
    startTransition(async() =>{
      const res = await getCountryData();
      console.log(res.data);
    })
  },[])

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <h1>country</h1>
    </div>
  );
};

export default Country;
