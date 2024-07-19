import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <div className=' sticky z-10 flex top-0 w-full pl-3 pt-3 shadow-sm shadow-blue-900 '>
      <NavLink to={''} className=' flex flex-grow'>
                 <h1 className=' text-lg text-sky-900 font-bold  '>UI Practice</h1>
      </NavLink>
    </div>
  )
}

export default Header