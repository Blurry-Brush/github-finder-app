import { useState, useContext, useRef, useEffect } from "react";
import GithubContext from "../Contexts/Github/GithubContext";
import AlertContext from "../Contexts/Alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      // (msg,type)
      setAlert("Please enter something!", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 mb-8 gap-2 sm:gap-8">
        {/* search */}
        <div className="border-black">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none btn btn-lg w-36"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* clear button  */}
        {users.length > 0 && (
          <div>
            <button
              onClick={() => clearUsers()}
              className="btn-ghost btn btn-lg"
            >
              {" "}
              Clear
            </button>
          </div>
        )}
      </div>
    
  );
}

export default UserSearch;
