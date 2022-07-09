import axios from "axios";

const REACT_APP_GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const REACT_APP_GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const github = axios.create({
    baseURL: REACT_APP_GITHUB_URL,
    headers: {
        Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
    }
})  


export const searchUsers = async (text) => {
    
    const params = new URLSearchParams({
      q: text,
    });
    
    const response = await github.get(`/search/users?${params}`);
    return  response.data.items;    


  };

  export const getUser = async (login) => {
    const response = await fetch(`${REACT_APP_GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location("/notfound");
    } else {
      const data = await response.json();
      return data
    }
  };

  //get all the repos in a array
  export const getUserRepos = async (login) => {
    const response = await fetch(`${REACT_APP_GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location("/notfound");
    } else {
      const data = await response.json();
      return data;
    }
  };

