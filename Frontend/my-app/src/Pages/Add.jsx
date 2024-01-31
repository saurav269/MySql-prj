import React, { useState } from 'react'

const Add = () => {
    const [book, setBook] = useState({})
  return (
    <div>
      <h1>Add Page</h1>
      <input type='text' placeholder='title' />
      <input type='text' placeholder='desc' />
      <input type='number' placeholder='price' />
      <input type='text' placeholder='cover' />
    </div>
  )
}

export default Add
