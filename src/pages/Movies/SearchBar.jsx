// import { useState } from 'react';

export const SearchBar = ({ onSubmit, value }) => {
  // const [request, setRequest] = useState('');

  // const handleInputChange = e => {
  //   setRequest(e.target.value.trim());
  //   console.log(e);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.searchValue.value;
    if (searchValue.trim() === '') {
      return;
    }
    onSubmit(searchValue);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchValue" />
      <button type="submit">Search</button>
    </form>
  );
};
