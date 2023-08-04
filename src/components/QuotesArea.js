
const QuotesArea = ({quoteText, quoteAuthor}) => {

    return (<div className='font-serif text-center flex flex-col items-center justify-center'>
        <p>{quoteText}</p>
        <p className='font-semibold'>{quoteAuthor}</p>
    </div>)
}

export default QuotesArea