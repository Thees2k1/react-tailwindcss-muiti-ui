import art1 from "./assets/art1.png";
import art2 from "./assets/art2.png";
import art3 from "./assets/art3.png";
import art4 from "./assets/art4.png";
import ava from "./assets/ava.png";
import ether from "./assets/ether.png";
import verify from "./assets/verify.png";
import collect1 from "./assets/collect1.png";
import collect2 from "./assets/collect2.png";
import collect3 from "./assets/collect3.png";
import collect4 from "./assets/collect4.png";
import collect5 from "./assets/collect5.png";

const TempData = {
  name: "The Futh Ast",
  ava: ava,
  bid: "0.25 ETH",
  arts: [art1, art2, art3, art4],
};

const TopCollections = [
  {
    name: "CrytpoFunks",
    avatar: collect1,
    checked: true,
    balances: "19,768,38",
    isUp: true,
    percent: "+26.54%",
  },
  {
    name: "Cryptix",
    avatar: collect2,
    checked: false,
    balances: "2,769.39",
    isUp: false,
    percent: "+10.52%",
  },
  {
    name: "Frencware",
    avatar: collect3,
    checked: false,
    balances: "9,232,39",
    isUp: true,
    percent: "+2.54%",
  },
  {
    name: "PunkArt",
    avatar: collect4,
    checked: true,
    balances: "3,744,32",
    isUp: true,
    percent: "+1.54%",
  },
  {
    name: "Art Crypto",
    avatar: collect5,
    checked: false,
    balances: "10,769,39",
    isUp: false,
    percent: "+2.52%",
  },
];
const CollectionOver = () => {
  return (
    <section className="w-full my-[134px] max-w-fl">
      <div className="flex gap-10  justify-between item-center">
        <div className="flex gap-[52px]">
          <div className="flex h-full flex-col gap-8">
            <div className="rounded-lg w-[400px]">
              <img src={art1} alt="" />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full">
                  <img src={TempData.ava} alt="" className="w-12 h-12" />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-2xl font-bold">{TempData.name}</h3>
                  <p className="text-sm">10 in the stock</p>
                </div>
              </div>
              <div className="flexflex-col">
                <h4 className="text-[12px]">Highest Bid</h4>
                <div className="flex gap-2">
                  <img src={ether} alt="" />
                  <h5 className="text-base font-bold">{TempData.bid}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            {TempData.arts.map(
              (art, index) =>
                index !== 0 && (
                  <ArtItem key={index} art={art} active={index === 1} />
                )
            )}
          </div>
        </div>
        <div className="border-l border-[#ECECEC]"></div>
        <div className="flex flex-grow flex-col gap-8">
          <h2 className="text-lg font-bold">
            TOP COLLECTIONS OVER <br />{" "}
            <span className="text-[18px] text-[#3d007b]">Last 7 days </span>
          </h2>
          <TopsList />
        </div>
      </div>
    </section>
  );
};

type ArtItemProps = {
  art: string;
  active: boolean;
};

function ArtItem({ art, active = false }: ArtItemProps) {
  return (
    <div className="flex gap-4">
      <img src={art} alt="" className="w-36 h-36 rounded-md" />
      <div className="flex flex-col justify-evenly">
        <h3 className="font-bold text-lg">{TempData.name}</h3>
        <div className="flex gap-2 items-center">
          <img src={TempData.ava} alt="" className="w-8" />
          <button className="rounded-md py-0.5 px-1.5 border border-[#00AC4F]">
            <div className="flex items-center text-[#00AC4F]">
              <img src={ether} alt="" className="pr-1 w-4 h-4" />
              {TempData.bid}
            </div>
          </button>
          <h6 className="text-sm">1 of 8</h6>
        </div>
        <button
          className={`rounded-full w-fit px-7 py-3 border ${
            active
              ? "border-transparent bg-[#3D0087] text-white"
              : "border-[#3D0087] text-[#3D0087]"
          }`}
        >
          Place a bid
        </button>
      </div>
    </div>
  );
}

function TopsList() {
  return (
    <div className="flex flex-col justify-between h-full">
      {TopCollections.map((item, index) => (
        <div key={index} className=" flex items-center justify-between">
          <div className="flex gap-[23px] items-center ">
            <h1 className="font-bold text-[24px]">{index + 1}</h1>
            <div className="w-15 h-15 relative">
              <img src={item.avatar} alt="" />
              {item.checked && (
                <img
                  src={verify}
                  className="w-8 h-8 absolute -top-1 -right-1"
                />
              )}
            </div>
            <div className="flex-col">
              <h3 className="pb-1">{item.name}</h3>
              <div className="flex gap-2 items-center">
                <img src={ether} alt="" className="h-4" />
                <h6>{item.balances}</h6>
              </div>
            </div>
           
          </div>
          <h3 className={`font-extrabold text-xl ${item.isUp ?"text-[#14C8B0]": "text-[#FF002E]"} `}>
              {item.percent}
            </h3>
        </div>
      ))}
    </div>
  );
}

export default CollectionOver;
