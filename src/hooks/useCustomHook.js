import { useState, useEffect } from 'react';
import axios from 'axios';

const useCustomHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useCustomHook;
