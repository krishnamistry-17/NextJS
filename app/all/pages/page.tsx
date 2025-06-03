"use client";
import { useEffect, useState } from "react";

//getstaticprops , getserversideporps

export default function Page() {
  const [data, setData] = useState(null);
  console.log("data :", data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`HTTP not works,${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };
    fetchData().catch((e) => {
      console.log("An error fetching data", e);
    });
  });

  return <div>Your data</div>;
}

//using swr to fetch data on client
// "use client";
// import useSWR from "swr";
// export default function Page() {
//   const { data, error, isLoading } = useSWR();

//   if (error) return <p>error</p>;
//   if (isLoading) return <p>Loading</p>;

//   return <p>Your data{data}</p>;
// }
