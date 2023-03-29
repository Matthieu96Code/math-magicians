import { useState, useEffect } from 'react';
import '../styles/Math.css';

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
  }, []);

  return (
    <div className="quotePage">
      <p className="quote">{data || 'loading ...'}</p>
    </div>
  );
};

export default Quotes;
