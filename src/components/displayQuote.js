import { useState, useEffect } from 'react';

const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const key = 'BQMsoYBppXMsrv0ST47LtA==ZtlLHHrcDDqIdkSA';

const Quotes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiUrl,
        {
          headers: {
            'X-Api-Key': key,
          },
        });
      const json = await res.json();
      setData(json[0]);
    };
    fetchData();
  }, [setData]);
  console.log(data);

  return (
    <div>
      qoute
    </div>
  );
};

export default Quotes;
