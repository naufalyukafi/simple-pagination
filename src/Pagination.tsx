import React, { useState, useEffect } from 'react'
import "./Pagination.css"

interface IData {
    title: string
}

const Pagination = () => {
    const [data, setData] = useState<IData[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemPage] = useState(10)

    const pages = []

    for (let index = 1; index <= Math.ceil(data?.length / itemPage); index++) {
        pages.push(index);
    }

    const indexOfLastItem = currentPage * itemPage
    const indexOfFirstItem = indexOfLastItem - itemPage
    const currentItemsPage = data.slice(indexOfFirstItem, indexOfLastItem)

    const onNumberPaginate = (id: number) => setCurrentPage(Number(id))

    const onNextPage = () => setCurrentPage((page) => page + 1)

    const onPrevPage = () => setCurrentPage(page => page - 1)

    const callData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(result => setData(result))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        callData()
    }, [])

    return (
        <div>
            <h1>Simple Pagination</h1>
            <ul>
                {currentItemsPage?.map((item, index) => (
                    <li key={index} data-testid={`title-item-${index}`} className="content__title">{item.title}</li>
                ))}
            </ul>
            <div>

                <ul className='page__number'>
                    <li>
                        <button
                            onClick={onPrevPage}
                            disabled={currentPage === 1 ? true : false}
                            className={currentPage === 1 ? "disabled" : ""}
                        >
                            Prev
                        </button>
                    </li>

                    {pages?.map((number) => (
                        <li
                            key={number}
                            onClick={() => onNumberPaginate(number)}
                            className={currentPage === number ? "active" : ""}
                        >
                            {number}
                        </li>
                    ))}

                    <li>
                        <button
                            disabled={currentPage === Math.ceil(data?.length / itemPage)}
                            onClick={onNextPage}
                            className={currentPage === Math.ceil(data?.length / itemPage) ? "disabled" : ""}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Pagination