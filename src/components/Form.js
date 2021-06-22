import { IoIosAdd } from 'react-icons/io'
import { useState } from 'react'
const Form = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title || !category || !description) {
      alert('Fill all inputs')
      return
    }
    onAdd({ title, category, date, description, completed })
    setTitle('')
    setCategory('')
    setDate('')
    setDescription('')
    setCompleted(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-4 mt-6'>
        <input
          type='text'
          className='w-full bg-blue-200 placeholder-blue-500 rounded-lg p-4 text-sm bg-transparent focus:outline-none focus:border-transparent'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Task'
        />
      </div>
      <div className='add-task bg-gray-200 rounded-lg p-3'>
        <div className='mb-4'>
          <input
            type='text'
            className='w-full text-sm bg-transparent focus:outline-none focus:border-transparent'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder='Category'
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            className='w-full text-sm bg-transparent focus:outline-none focus:border-transparent'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder='Date'
          />
        </div>
      </div>
      <div className='mt-4 bg-teal-200'>
        <textarea
          className='w-full p-2 placeholder-yellow-600	 text-sm focus:outline-none focus:border-transparent shadow-lg rounded-lg'
          style={txtStyling}
          stname=''
          id=''
          cols='30'
          rows='5'
          placeholder='Write a note......'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className='bg-green-800 py-3 flex align-center text-xl justify-center w-full mt-4 text-white p-2 rounded-lg shadow hover:shadow-lg hover:bg-green-900 transition duration-150 '>
        <h6 className='text-sm'>Add</h6>
        <IoIosAdd />
      </button>
      <hr />
    </form>
  )
}

const txtStyling = {
  backgroundColor: '#D5C7AC',
}

export default Form
