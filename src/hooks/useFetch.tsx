import { useEffect, useState } from 'react';

function useFetch<Type>(url: string): {
  response: Type | null;
  error: Error | null;
  isLoading: boolean;
} {
  const [response, setResponse] = useState<Type | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Response not ok');
        }
        return res.json();
      })
      .then((res) => setResponse(res))
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('New Fetch Request Started');
        } else {
          setError(err);
        }
      })
      .finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, [url]);
  return { response, error, isLoading };
}
export default useFetch;
