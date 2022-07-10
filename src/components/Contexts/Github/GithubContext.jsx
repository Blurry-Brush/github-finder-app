import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const REACT_APP_GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const REACT_APP_GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initalState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initalState);
  // dispatch is used to ship the contents to the reducer via action type to modify the state.

  const searchUsers = async (text) => {
    setLoading();

    const response = await fetch(
      `${REACT_APP_GITHUB_URL}/search/users?q=${text}`
    );
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${REACT_APP_GITHUB_URL}/users/${login}`);

    if (response.status === 404) {
      window.location("/notfound");
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const getUserRepos = async (login) => {
    setLoading();

    const response = await fetch(
      `${REACT_APP_GITHUB_URL}/users/${login}/repos`
    );

    if (response.status === 404) {
      window.location("/notfound");
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER_REPOS",
        payload: data,
      });
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
