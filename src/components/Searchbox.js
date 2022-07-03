import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
    <TextField
      fullWidth
      value={searchParams.get('q') || ''}
      onInput={handleChange}
      placeholder="Search..."
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
}

export default Searchbox;
