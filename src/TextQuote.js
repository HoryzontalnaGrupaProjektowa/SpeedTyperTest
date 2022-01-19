import React, {useState, useEffect, useMemo} from "react";
 import TextInput from './TextInput'


const FetchRandomQuote = ({
  setWordCount
}) =>  {

  const [loading , setLoading] = useState(true);
  const [quotes , setQuotes] = useState({
    quote: '',
    userQuote: ''
  })

  const setUserQuote = (userText) => {
    setQuotes({
      ...quotes,
      userQuote: userText
    })
  }

  useEffect(async () => {
    const url = 'https://api.quotable.io/random?minLength=200&maxLength=250';
    const response = await fetch(url);
    const data = await response.json();

    setQuotes({
      ...quotes,
      quote: data.content
    })
    setLoading(true)

  }, [])

  const {quoteCharsArray, quoteUserCharsArray} = useMemo(() => {
    return {
      quoteCharsArray: Array.from(quotes.quote),
      quoteUserCharsArray: Array.from(quotes.userQuote)
    }
  }, [quotes])

  const count = useMemo(() => {
    const quoteWordsArray = quotes.quote.split(' ');
    const quoteUserWordsArray = quotes.userQuote.split(' ');

    return quoteWordsArray.filter((word, index) => word ===  quoteUserWordsArray[index]).length

  }, [quotes])
  
  useEffect(() => {
    setWordCount(count)
  }, [count])

  const getClass = (index) => {
    if(!quoteUserCharsArray[index]){
      return undefined
    } else if(quoteUserCharsArray[index] === quoteCharsArray[index]){
      return 'ok'
    } else {
      return 'bad'
    }
  }
  

  if (!loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
     <div>{quoteCharsArray.map((char, index) => <span key={index} className={getClass(index)}>{char}</span>)}</div>
      <TextInput setUserQuote={setUserQuote}  value={quotes.userQuote}/>
    
    </div>
  );

}

export default FetchRandomQuote;


