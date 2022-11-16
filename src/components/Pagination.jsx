import React, {useState} from 'react'


const Pagination = ({ page, setPage, maximum }) => {
    const [input, setInput] = useState(1)
    const nextPage = () => {
        if (page + 1 <= maximum) {
            setPage(page + 1)
        } else {
            setPage(1)
        }
    }
    const previusPage = () => {
        if (page - 1 >= 1) {
            setPage(page - 1)
        } else {
            setPage(maximum)
        }
    }
    const onChange = e => {
        if (inputValue >= 1 && inputValue <= maximo && !isNaN(inputValue)) {
            setInput(e.target.value)
        }
    }
    return (
        <section className='paginationContainer'>
            <div className="pagination">
            <button onClick={previusPage}>Prev</button>
            <input onChange={e => onChange(e)}
                name="page"
                autoComplete='off'
                value={page}
                type="text" />
            <button onClick={nextPage}>Next</button>
            </div>
        </section>
    )
}
export default Pagination