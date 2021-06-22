import { IoIosAdd, IoIosClose } from 'react-icons/io';

const Header = ({onAdd, showAdd}) => {
    const bg = showAdd ? 'bg-red-800' : 'bg-blue-800';
    const bgHover = showAdd ? 'bg-red-900' : 'bg-blue-900';
    return (
        <div className="flex justify-between">
          <h3 className="">Task Manager</h3>
          <button onClick={onAdd} className={` ${bg} show text-white p-2 rounded-lg shadow hover:shadow-lg hover:${bgHover} flex items-center focus:outline-none`}>
            {/* <h6>{showAdd ? 'Close Form' : 'New Task'}</h6> */}
            {showAdd ? <IoIosClose /> : <IoIosAdd /> }
          </button>
        </div>
    )
}

export default Header
