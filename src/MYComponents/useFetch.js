import { useState } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchFunc = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          
          throw Error("could not fetch data from source");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      })
  }
  // useEffect(() => {
  //     fetch(url)
  //     .then(res => {
  //         if(!res.ok){
  //             throw Error('could not fetch data from source');
  //         }
  //         return res.json();
  //     })
  //     .then( data => {
  //         console.log(data);
  //         setData(data);
  //         setIsPending(false);
  //         setError(null);
  //     })
  //     .catch(err => {
  //         setIsPending(false);
  //         setError(err.message);
  //     })

  // }, [url])

  return { fetchFunc, data, isPending, error };
};
export default useFetch;
