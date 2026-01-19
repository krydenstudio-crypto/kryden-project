
import { Link } from 'react-router-dom'
import SignIn from '../auth/SignIn'
import Logo from '../ui/Logo'
import NavMenu from '../ui/NavMenu'

const Header = () => {
  return (
    <div className='flex justify-between items-center z-50 min-w-full'>
        <Logo/>
        <NavMenu/>
        <Link to="/">
           <p className='text-secondary font-medium text-[13px] lg:text-[16px]'>Sign in</p>
        </Link>
    </div>
  )
}

export default Header