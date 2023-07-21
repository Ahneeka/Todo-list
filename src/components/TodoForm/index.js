import TodoList from "../TodoList"

function TodoForm() {

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className='h-screen bg-gradient-to-r from-blue-500 to-pink-900 justify-center text-center' onSubmit={handleSubmit}>
      <h1 className="font-semibold text-3xl p-8 text-white">What's the plan for today</h1>
        <input 
        type="text" 
        placeholder='Add a todo' 
        name='text'
        className='py-3 px-9 border-blue-700 border-2'
        />
        <button className='py-2 px-3  border-blue-700 border-2 bg-pink-700 text-white'>Add todo</button>
        <TodoList />
    </form>
  )
}

export default TodoForm