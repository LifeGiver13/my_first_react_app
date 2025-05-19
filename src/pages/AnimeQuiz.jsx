import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DefaultPage } from "../DefaultPage";
import { CondensedListings } from "../components/list";
import '../App.css'

export default function AnimeQuiz() {
    const { id } = useParams(); // Optional param
    const navigate = useNavigate();
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

    // Redirect to first question if no ID in URL
    useEffect(() => {
        if (!id && items.length > 0) {
            navigate(`/animeQuiz/${items[0].id}`, { replace: true });
        }
    }, [id, items, navigate]);

    const currentQuestion = items.find((q) => String(q.id) === id);

    const CountScore = () => {
        setScore((prev) => prev + 1);
    };

    return (
        <DefaultPage>
            <h1>Anime Quiz</h1>
            <p>Viewing question ID: {id}</p>
            <h2>Score: {score}</h2>

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
