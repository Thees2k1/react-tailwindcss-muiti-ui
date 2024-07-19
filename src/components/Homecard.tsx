
import PracticesList from './PracticesList'
import { PRACTICES } from '../shared'

const Homecard = () => {
  return (
    <div className=' flex flex-col items-center justify-start flex-grow pt-5 w-full  min-h-[500px] md:flex-grow-0 md:rounded-xl md:px-4 md:shadow-md shadow-slate-800 bg-white-500 mx-2  md:w-1/2'>
        <h1 className=' text-lg '>UI Practice</h1>
        <div className='mb-4'>

        </div>
        <PracticesList data={PRACTICES}/>
    </div>
  )
}

export default Homecard