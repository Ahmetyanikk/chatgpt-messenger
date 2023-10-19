import { PlusIcon } from "@heroicons/react/24/solid"
import {useSession, signOut} from "next-auth/react";
function NewChat() {

  const createNewChat = async() =>{
    const{data: session} =useSession()

  }
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
        <PlusIcon className="h-4 w-4"/>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat