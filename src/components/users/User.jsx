import {FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import GithubContext from "../Contexts/Github/GithubContext";
import { Link } from "react-router-dom";
import RepoList from "../Repos/RepoList"
import {getUser, getUserRepos} from "../Contexts/Github/GithubActions"

function User() {
  const {user, loading, repos, dispatch} = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({type:"SET_LOADING"});
    const getUserData = async() => {
      const userData = await getUser(params.login);
      dispatch({type:"GET_USER", payload: userData});
    }

    const userRepoData = async() => {
      const repoData = await getUserRepos(params.login);
      dispatch({type:"GET_USER_REPOS", payload: repoData});
    }

    getUserData();
    userRepoData();
  }, [dispatch, params.login]);

  if (loading) {
    <Spinner></Spinner>;
  }

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    type,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    twitter_username,
  } = user;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12 ">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="#" />
              </figure>

              <div className="card-body">
                <h2 className="card-title mb-0">{name}</h2>

                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="badge badge-success ml-1">{type}</div>

                {hireable && <div className="badge badge-info">Hireable</div>}
              </h1>

              <p>{bio}</p>

              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            {/* stats  */}
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg text-accent">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="stat-value text-lg text-accent">
                    <a
                      href={`http://${blog}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}

              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="stat-value text-lg text-accent">
                    <a
                      href={`http://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>



        <div className="w-full py-5 mb-6 rounded-lg shadow-md stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">
              Followers
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">
              Following
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">
              Public Repos
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">
              Public Gists
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
            </div>
          </div>
        </div>

      </div>
      <RepoList repos={repos}></RepoList>
    </>
  );
}

export default User;
