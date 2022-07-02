import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Searchbox() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    const value = e.target.value;

    setSearchParams(value);

    if (value === '') {
      const searchParam = searchParams.get('q');

      if (searchParam) {
        searchParams.delete('q');
        setSearchParams(searchParams);
      }
    } else {
      setSearchParams({ q: value });
    }
  }

  return (
    <input
      className="outline-none border-2 border-Gray-500 indent-9 bg-no-repeat bg-4 bg-left bg-search mt-8 w-1/2 h-8 placeholder:indent-9 placeholder:text-[#9ca3af]"
      value={searchParams.get('q') || ''}
      onChange={handleChange}
      type="text"
      placeholder="İsim ara..."
    />
  );
}
export default Searchbox;
