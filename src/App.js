import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from './Quote';
import getQuote from './getQuote'

function App() {

  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);


  useEffect(() => {
    populateData();
  }, []);

  const fetchQuotes = async () => {
    const response = await fetch(
      `https://api.quotable.io/random`
    );
    const data = await response.json();
    console.log(data);

    return data;

  }

  const populateData = async () => {
    const data = await fetchQuotes();
    setQuote(data.content);
    setAuthor(data.author);
  }

  // const displayQuote = getQuote.map(item => <Quote info={item} />)

  return (
    <div className='app'>
      {/* {displayQuote} */}
      <Quote
        quote={quote}
        author={author}
      />
      <button onClick={populateData} className="btn">Generate</button>


    </div >
  )
}

export default App