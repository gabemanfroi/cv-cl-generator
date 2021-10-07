import { useEffect, useState } from 'react';

const Resume = () => {
  const [teste, setTeste] = useState('oi');

  useEffect(() => {
    setTeste('tchau');
  }, []);
  return <h1>{teste}</h1>;
};

export default Resume;
