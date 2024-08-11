import { useState } from 'react';

import { IPropForm } from '../../types/props';

export const SearchForm: React.FC<IPropForm> = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('')

     const queryHendler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase())
  };

  const submitHendler = (e:React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter name movie');
    }
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };
    return (
            <form onSubmit={submitHendler}>
      <button type="submit">Search</button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie name"
        onChange={queryHendler}
        name="searchQuery"
        value={searchQuery}
      />
    </form>
    )
}