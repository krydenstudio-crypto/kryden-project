import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div className='bg-primary h-screen text-text lg:px-14 px-3 py-7 w-full'>
      <div className='w-full'>
        <Header/>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout