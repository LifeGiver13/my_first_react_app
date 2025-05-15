

import React, { useState } from 'react';
import './App.css';
import { CondensedListings } from './components/list';
import { useQuery } from '@tanstack/react-query';

export default function App() {
  const [shouldFetch, setShouldFetch] = useState(false);

  const fetchItems = async () => {
    const res = await fetch('/questions.json');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  };

  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ['anime-questions'],
    queryFn: fetchItems,
    enabled: shouldFetch,
    refetchOnWindowFocus: false
  });


  return (
    <>
      <div className='body'>
        <h1>Anime Trivia</h1>

        {!shouldFetch && <p>No info available</p>}

        <button onClick={() => setShouldFetch(true)}>
          Load Trivia
        </button>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong.</p>}

        {items.map((item) => (
          <div key={item.id}>
            <div className='item' >
              <CondensedListings item={item} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}