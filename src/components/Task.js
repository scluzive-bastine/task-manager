import { IoIosCheckmark, IoIosTrash, IoMdTime } from 'react-icons/io'

const Task = ({ task, onDelete }) => {
  const colors = [
    'red',
    'blue',
    'gray',
    'pink',
    'green',
    'yellow',
    'indigo',
    'purple',
  ]
  //   const bgColor = () => {
  const bg = colors[Math.floor(Math.random() * colors.length)]
  //   }
  return (
    <div className='task flex justify-between items-center relative mt-5 mb-12'>
      <div
        className={`bg-${bg}-700 px-3 py-2 rounded-lg text-white w-full absolute task-content shadow-md hover:shadow-lg mt-4 transition duration-700 z-10`}
      >
        <h5 className='font-bold'>{task.title}</h5>
        <p className='text-xs'>{task.description}</p>
        <small className='text-xs flex items-center'>
          <IoMdTime />
          {task.date}
        </small>
      </div>
      <div className='ml-auto'>
        <button className='pl-2 pr-2 h-20 ml-2 rounded-lg text-green-500 text-xl border-2 border-green-500 hover:border-green-600 hover:text-green-600 transition duration-700 action'>
          <IoIosCheckmark />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className='pl-2 pr-2 h-20 ml-2 rounded-lg text-red-500 text-xl border-2 border-red-500 hover:border-red-600 hover:text-red-600 transition duration-700 action'
        >
          <IoIosTrash />
        </button>
      </div>
    </div>
  )
}

export default Task
