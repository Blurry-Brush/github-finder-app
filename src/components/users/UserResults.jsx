import React from "react";
import { useContext } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../Contexts/Github/GithubContext";

function UserResults() {
  
  const {users,loading} = useContext(GithubContext)



  

  if(!loading){

      return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserItem key={user.id} user={user}/>
          ))}
        </div>
      );
  }
  else{
    return <Spinner/>
  }

}

export default UserResults;