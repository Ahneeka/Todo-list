import { Icon } from '@iconify/react';

function TodoList() {
  return (
    <div className="m-8 w-[20rem] ml-auto mr-auto ">
        <h2 className="bg-blue-500 p-6 text-white mb-3 text-xl flex gap-10">To learn dart  <Icon icon="typcn:delete-outline" width={30} height={30}/> <Icon icon="ep:edit" width={30} height={30} /> </h2>
        <h2 className="bg- bg-pink-200 p-6 text-white mb-3 text-xl flex gap-10">Work out <Icon icon="typcn:delete-outline" width={30} height={30}/> <Icon icon="ep:edit" width={30} height={30} /> </h2>
        <h2 className="bg-rose-500 p-6 text-white mb-3 text-xl flex gap-10">Wash cloth <Icon icon="typcn:delete-outline" width={30} height={30}/> <Icon icon="ep:edit" width={30} height={30} /> </h2>
        <h2 className="bg-violet-500 p-6 text-white mb-3 text-xl flex gap-10"> To Cook <Icon icon="typcn:delete-outline" width={30} height={30}/> <Icon icon="ep:edit" width={30} height={30} /> </h2>
    </div>
  )
}

export default TodoList
