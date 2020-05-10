import React, {useState, useEffect} from 'react';

function Quotes() {
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        getQuote()
    }, []);


    const getQuote = () => {
        const url = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;
        fetch (url)
            .then(res => res.json())
            .then(data => {
                let randomNum = Math.floor(Math.random() * data.length);
                let randomQuote = data[randomNum].quote;
                let randomAuthor = data[randomNum].author;
                console.log(randomQuote);
                console.log(randomAuthor);

                setQuote(randomQuote);
                setAuthor(randomAuthor);
            })
    };

    const handleClick = () => {
        getQuote();
    };

    return (
        <div id="quote-box">
            <div id="quote-box-inner">
                <div id="text">"{quote}"</div>
                <div id="author">-{author}</div>
                    <div id="quote-controls">
                        <a href='https://twitter.com/intent/tweet' target="_blank" className="btn" id="tweet-quote">Tweet</a>
                        <button className="btn" id="new-quote" onClick={handleClick}>New Quote</button>
                    </div>
            </div>
        </div>
    )
};

export default Quotes;