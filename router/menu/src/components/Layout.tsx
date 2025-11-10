import { Outlet } from 'react-router'
import Menu from './Menu'

function Layout() {
  
  return (
    <div>
      <Menu />
      <div className="page">
        <Outlet />
      </div> 
    </div>
  )

}

export default Layout