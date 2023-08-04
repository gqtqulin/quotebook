import Button from '@mui/material/Button';

const ButtonsControlPanel = ({setQuoteText, setQuoteAuthor}) => {

    const handleRequestTodayQuot = async () => {
        try {
          const response = await fetch('https://favqs.com/api/qotd')
          const data = await response.json()
          console.log(data)
          console.log(13337)
          if (data) {
            setQuoteText(data.quote.body)
            setQuoteAuthor(data.quote.author)
          }
        } catch (error) {
          console.error(error)
        }
      }

    return (<div>
        <Button variant="contained" onClick={handleRequestTodayQuot}>Say something smart</Button>
    </div>)
}

export default ButtonsControlPanel