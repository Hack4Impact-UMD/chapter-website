import React, { useState } from "react";
import styles from "./FAQItem.module.css"

const FAQItem = (props) => {
    const [selected, setSelected] = useState(false);

    const toggleSelected = () => {
        setSelected(!selected)
    };
/*  class={selected ? "faq-item selected" : "faq-item"} */

    const Question = () => (
        <section className = {styles.faq_item}>
            <h3 className = {styles.faq_question} onClick={toggleSelected}>{props.question}</h3>
            <p className={selected ? styles.faq_answer_selected : styles.faq_answer}>{props.answer}</p>
        </section>
    );

    return (
        <section style={{ zIndex:2 }}>
            <Question/>
        </section>
    )
}

export default FAQItem;