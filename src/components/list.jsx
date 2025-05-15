import React, { useState } from "react";

export function CondensedListings({ item, onCorrect }) {
    const { id, question, answer, options } = item;
    const [selected, setSelected] = useState(null);
    const [result, setResult] = useState(null);
    const [hasCorrect, setHasCorrect] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setResult(option === answer ? '✅ Correct' : '❌ Wrong');

        if (option === answer && !hasCorrect) {
            onCorrect(); // ✅ Works now
            setHasCorrect(true);
        }
    };

    return (
        <div>
            <p>{id}. {question}</p>
            <ul className="list-style">
                {options.map((option, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleSelect(option)}
                            disabled={selected !== null}
                            style={{
                                backgroundColor:
                                    selected === option
                                        ? option === answer
                                            ? 'lightGreen'
                                            : 'red'
                                        : ''
                            }}
                        >
                            {String.fromCharCode(65 + index)}. {option}
                        </button>
                    </li>
                ))}
            </ul>
            <p><b>{result}</b></p>
        </div>
    );
}
