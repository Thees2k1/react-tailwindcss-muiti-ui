import cardTick from './assets/cartTick.png'
import charSquare from './assets/chartSquare.png'

const AmazeNFT = () => {
  return (
    <section className='bg-[#F4F4F4] w-full pt-28 pb-24'
    >
      <div className=' flex  justify-between max-w-fl mx-auto'>
      <span className="max-w-[398px]">
      <h2 className=" font-bold text-3xl">THE AMAZING NFT ART OF THE WORLD HERE</h2>

      </span>
      <div className="flex gap-14">
        <div className="flex gap-5 max-w-[300px]"> 
          <img src={cardTick} alt="" className="w-8 h-8" />
          <div className="flex flex-col gap-2">
            <h3>
              asdfads
            </h3>
            <p>sfasdfsdfasfsdfsdfsdfds asdfds asdfasd asdfadf</p>
          </div>
        </div>
        <div className="flex gap-5  max-w-[300px]"> 
          <img src={charSquare} alt="" className="w-8 h-8" />
          <div className="flex flex-col gap-2">
            <h3>
              asdfads
            </h3>
            <p>sfasdfsdfasfsdfsdfsdfds asdfds asdfasd asdfadf</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AmazeNFT