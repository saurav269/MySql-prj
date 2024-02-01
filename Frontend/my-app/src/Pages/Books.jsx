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

    //DELETE BOOKS
    const handleDelete=async(id)=>{
      try{
        await axios.delete("http://localhost:8800/books/"+id)
        window.location.reload()
      }catch(err){
        console.log(err)
      }
    }
    

  return (
    <div>
      <h1>Books Page</h1>
      <div className='books'>
        {books.map((ele) => (
            <div className='book' key={ele.id}>
                {ele.cover && <img src={ele.cover} alt='' />}
                <h2>{ele.title}</h2>
                <p>{ele.desc}</p>
                <span>{ele.price}</span>
                <button className='update'><Link to={`/update/${ele.id}`}>Update</Link></button>
                <button className='delete' onClick={() => handleDelete(ele.id)}>Delete</button>
            </div>
        ))}
      </div>
      <button><Link to='/add'>Add new Books</Link></button>
    </div>
  )
}

export default Books
