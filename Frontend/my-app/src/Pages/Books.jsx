import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                console.log(res.data)
                setBooks(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])
    

  return (
    <div>
      <h1>Books Page</h1>
      <div className='books'>
        {books.map((ele) => (
            <div className='books' key={ele.id}>
                {ele.cover && <img src={ele.cover} alt='' />}
                <h2>{ele.title}</h2>
                <p>{ele.desc}</p>
                <span>{ele.price}</span>
            </div>
        ))}
      </div>
      <button><Link to='/add'>Add new Books</Link></button>
    </div>
  )
}

export default Books
