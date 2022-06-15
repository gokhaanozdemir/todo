import React from 'react';
import { useStore } from '../useStore';
function Searchbox() {
  const searchQuery = useStore(state => state.searchQuery);
  const setSearchQuery = useStore(state => state.setSearchQuery);

  return (
    <input
      className=" outline-none  border-2 border-Gray-500 indent-9 bg-no-repeat bg-4 bg-left bg-search  mt-8 w-1/2 h-8  placeholder:indent-9 placeholder:text-[#9ca3af]"
      value={searchQuery}
      onChange={setSearchQuery}
      type="text"
      placeholder="İsim ara..."
    />
  );
}
export default Searchbox;
