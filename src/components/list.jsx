import React from "react";


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
    const { id, question, answer } = props.item;

    return <div>
        <p>{id}. {question} - {answer}</p>
    </div>

}
export default DefaultListItem;