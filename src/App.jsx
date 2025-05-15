

import React, { useState } from 'react';
import './App.css';
import { CondensedListings } from './components/list';
import { useQuery } from '@tanstack/react-query';

export default function App() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [score, setScore] = useState(0)

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

  const CountScore = () => {
    setScore((prev) => prev + 1);
  }



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
        {shouldFetch && <p>Please select an answer from the list of options. Each question is of 'Otaku-Level <h1>Score:{score} </h1></p>}
        {items.map((item) => (

          <div key={item.id}>
            <div className='item' >
              <CondensedListings item={item} onCorrect={CountScore} />
            </div>

          </div>
        ))}
      </div>
    </>
  );
}