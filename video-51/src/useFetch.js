import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(undefined);
    setIsError(false);

    const controller = new AbortController();

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      }); 

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isError, isLoading };
}
