// import { FaGithub } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

interface NavbarProps {
  title: string
}

function Navbar({ title }: NavbarProps) : JSX.Element{
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          {/* <FaGithub className='inline pr-2 text-3xl' /> */}
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <NavLink to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </NavLink>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
