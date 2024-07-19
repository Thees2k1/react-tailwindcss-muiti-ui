
import { NavLink } from 'react-router-dom'

type Props = {
    data: {title: string
        path: string
    }[]
    dense?: boolean
}

const PracticesList = ({data, dense =false}: Props) => {
  return (
    <>
    {data.map((e,index)=>
        <NavLink  key={index} to={e.path} className={({ isActive, isPending }:{isActive:any,isPending:any}) =>`flex w-full ${dense ? 'px-2 rounded-sm mt-1 mp-2 text-sm ': 'mb-2 p-2 rounded-md justify-center'}  hover:bg-sky-400  text-slate-100 hover:text-slate-100 ${isActive
          ? "bg-sky-500 font-bold"
          : isPending
          ? ""
          : "bg-sky-700"}`}>
            <h4 className='truncate'>{e.title}</h4>
        </NavLink>
    )}
    </>
  )
}

export default PracticesList