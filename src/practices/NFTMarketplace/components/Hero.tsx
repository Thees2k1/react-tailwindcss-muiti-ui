import carols from "./assets/carols.png";
import Dot from "./assets/Dot.png";

const Hero = () => {
  return (
    <section className="flex flex-col max-w-fl w-full pt-14 pb-28">
      <div className="flex gap-8 ">
        <div className="flex min-h-full justify-between flex-col max-w-[612px] relative">
          <h1 className="text-5xl font-bold">
            Discover, and collect Digital Art NFTs{" "}
          </h1>
          <span className="max-w-[471px]">
            <h2 className="text-xl">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </h2>
          </span>
          <div className="relative z-20">
            <button className=" py-[18px] w-48 rounded-full text-gray-200 active:text-white active:font-bold text-xl bg-[#3D00B7]">
              Explore Now
            </button>
            <img
              src={Dot}
              alt=""
              className=" absolute -left-[53px] top-0 -z-10 "
            />
          </div>
          <div className="flex gap-[23px] z-20">
            <div className="flex flex-col ">
              <h2 className="text-5xl font-bold">98K+</h2>
              <p className="text-xl">Artwork</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold">98K+</h2>
              <p className="text-xl">Auction</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold">98K+</h2>
              <p className="text-xl">Artist</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={carols} alt="" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
