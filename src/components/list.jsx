import React from "react";
import { useState } from "react";

function DefaultListItem({ props }) {

    const { id, question, answer } = props.item;
    return (
        <div>
            <p>{id}. {question}</p>
            <p>{answer}</p>
        </div>
    );
}

export function CondensedListings(props) {
    const { id, question, answer, options } = props.item;
    const [selected, setSelected] = useState(null);
    const [result, SetResult] = useState(null)


    const handleSelect = (option) => {
        setSelected(option)
        SetResult(option === answer ? '✅Correct' : '❌Wrong')
    }


    return <div>
        <p>{id}. {question}</p>
        <ul className="list-style">
            {options.map((option, index) => (
                <li key={index}>
                    <button onClick={() => handleSelect(option)} disabled={selected !== null}
                        style={{
                            backgroundColor: selected === option ? option === answer ? 'lightGreen' : 'red' : ''
                        }}>
                        {String.fromCharCode(65 + index)}. {option}
                    </button>

                </li>
            ))}

        </ul>

        <p><b>{result}</b></p>

    </div>

}
export default DefaultListItem;