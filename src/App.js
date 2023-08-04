import {useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ButtonsControlPanel from './components/ButtonsControlPanel'
import QuotesArea from './components/QuotesArea'

function App() {
  const [quote, setQuote] = useState()

  return (
    <div className="App">
      <Header />

      <ButtonsControlPanel setQuote={setQuote} />
      <QuotesArea quote={quote} />

      <Footer />

    </div>
  );
}

export default App;
