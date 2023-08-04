import Button from '@mui/material/Button';

const ButtonsControlPanel = ({setQuote}) => {

    const handleRequestTodayQuot = async () => {
        try {
          const response = await fetch('https://favqs.com/api/qotd')
          const data = await response.json()
          console.log(data)
          if (data) {
            setQuote(data.quote.body)
          }
        } catch (error) {
          console.error(error)
        }
      }

    return (<div>
        <Button variant="contained" onClick={handleRequestTodayQuot}>Запросить цитату дня</Button>
    </div>)
}

export default ButtonsControlPanel