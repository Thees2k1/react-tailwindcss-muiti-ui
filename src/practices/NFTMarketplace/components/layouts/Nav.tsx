

const Nav = () => {
  return (
    <nav className='flex gap-8 items-center'>
        <h1 className="font-bold text-[#3D00B7] text-2xl">NFTERS</h1>
        <div className=' border-l border-gray-400  h-6'></div>
        <div className='flex gap-12'>
            <div className="text-black text-base ">Marketplace</div>
            <div className="text-black text-base ">Resources</div>
            <div className="text-black text-base ">About</div>
        </div>
    </nav>
  )
}

export default Nav