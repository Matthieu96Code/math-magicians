import { useState, useEffect } from 'react';

const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const key = 'BQMsoYBppXMsrv0ST47LtA==ZtlLHHrcDDqIdkSA';

const Quotes = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl,
          {
            headers: {
              'X-Api-Key': key,
            },
          });
        const json = await res.json();
        setData(json[0].quote);
      } catch (err) {
        setData(err.message);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <div className="quote">
      <h1 className="quote-title">Quote</h1>
      <p>{data || 'loading ...'}</p>
    </div>
  );
};

export default Quotes;
