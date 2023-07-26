import { Icon } from '@iconify/react';

function TodoList(props) {
  const handledelete = () => {
    
  };

  return (
    <div className= {`m-8 w-[20rem] ml-auto mr-auto p-6 text-white mb-3 text-xl flex gap-9 ${props.className}`}>
      <h1>
        {props.title}
      </h1>

      <button>
        <Icon icon="typcn:delete-outline" width={30} height={30}/> 
      </button>

      <button>
        <Icon icon="ep:edit" width={30} height={30} />
      </button>
    </div>
  )
}

export default TodoList


