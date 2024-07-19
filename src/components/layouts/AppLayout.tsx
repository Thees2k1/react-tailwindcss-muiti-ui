
import Header from './Header'
import { SideNav } from './SideNav'
import { Outlet } from "react-router-dom";



const AppLayout = () => {
  return (
    <main className='flex flex-col max-h-screen w-full overflow-hidden '>
        <Header/>
        <section className="grid grid-cols-[auto,1fr]">
            <SideNav/>
            <Outlet/>
        </section>
    </main>
  )
}

export default AppLayout