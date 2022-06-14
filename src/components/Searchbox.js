import React from 'react';

function Searchbox(props) {
  const { searchQuery, setsearchQuery } = props;

  return (
    <input
      className=" outline-none  border-2 border-Orange-500 indent-9 bg-no-repeat bg-4 bg-left bg-search  mt-8 w-1/2 h-8 italic placeholder:indent-7 placeholder:text-[#9ca3af]"
      value={searchQuery}
      onChange={setsearchQuery}
      type="text"
      placeholder="İsim ara..."
    />
  );
}
export default Searchbox;
