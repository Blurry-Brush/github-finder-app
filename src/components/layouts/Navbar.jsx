import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) {
  return (
    <nav className='navbar bg-neutral mb-12 text-neutral-content shadow-lg'>
        <div className="container mx-auto">
            <div className='flex-none px-2 mx-2'>
                <FaGithub className='inline text-3xl pr-2' />
                <Link to="/" className='align-middle text-lg font-semibold'>
                    {title}
                </Link>
            </div>


            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    {/* links */}
                    <Link to="/" className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                    <Link to="/about" className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                    
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar