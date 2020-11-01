import React, { useState } from "react";
import "./FAQItem.css"

const FAQItem = (props) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected(!selected)
    };
/*  class={selected ? "faq-item selected" : "faq-item"} */

    const Question = () => (
        <section class="faq-item">
            <h2 onClick={toggleSelected}>{props.question}</h2>
            <p class={selected ? "faq-answer selected" : "faq-answer"}>{props.answer}</p>
        </section>
    );

    return (
        <section style={{ zIndex:2 }}>
            <Question/>
        </section>
    )
}

export default FAQItem;