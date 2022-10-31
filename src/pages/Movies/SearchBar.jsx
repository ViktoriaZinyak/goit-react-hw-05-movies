import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handleInputChange = e => {
    setRequest(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (request.trim() === '') {
      return;
    }
    onSubmit(request);
    setRequest('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={request} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};
