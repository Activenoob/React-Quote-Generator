import React from 'react';
import './App.css';
function Quote({ quote, author }) {
    return (
        <div className="quoteContainer">
            <p className="quote">{quote}</p>
            <h5 className="author">{author}</h5>

        </div>

    )
}

export default Quote;