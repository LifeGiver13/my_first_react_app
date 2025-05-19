import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"; // assuming you're using React Query v4
import { DefaultPage } from "../DefaultPage";
import { CondensedListings } from "../components/list";
import '../App.css';



export default function AnimeQuiz() {
    const { id } = useParams();
    const [score, setScore] = useState(0);

    const fetchItems = async () => {
        const res = await fetch('/questions.json');
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    };

    const { data: items = [], isLoading, isError } = useQuery({
        queryKey: ['anime-questions'],
        queryFn: fetchItems,
        refetchOnWindowFocus: false
    });

    const currentQuestion = items.find((q) => String(q.id) === id); // id is a string

    const CountScore = () => {
        setScore((prev) => prev + 1);
    };

    return (
        <DefaultPage>
            <h1>Anime Quiz</h1>
            <p>Watching question ID: {id}</p>
            {/* <h2>Score: {score}</h2> */}

            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong.</p>}

            {!isLoading && !isError && !currentQuestion && (
                <p>No question found for ID {id}</p>
            )}

            {!isLoading && !isError && currentQuestion && (
                <div className='item'>
                    <CondensedListings item={currentQuestion} onCorrect={CountScore} />
                </div>
            )}
        </DefaultPage>
    );
}
