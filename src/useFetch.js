import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs_1, setBlogs] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        setError(null);
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message); //catch catches error message from throw
        console.log(err.message);
        
      });
  }, [url]);  //whenever url changes, it'll rerender

  return { blogs_1, isLoading, error };
};


export default useFetch;