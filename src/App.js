import {useEffect, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ButtonsControlPanel from './components/ButtonsControlPanel'
import QuotesArea from './components/QuotesArea'

function App() {
  const [quoteText, setQuoteText] = useState()
  const [quoteAuthor, setQuoteAuthor] = useState()

  return (
    <div className='App flex gap-10 flex-col items-center'>
      <Header />
      <div className='main-section flex flex-col items-center justify-center gap-y-2'>
        <ButtonsControlPanel setQuoteText={setQuoteText} setQuoteAuthor={setQuoteAuthor} />
        <QuotesArea quoteText={quoteText} quoteAuthor={quoteAuthor} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
