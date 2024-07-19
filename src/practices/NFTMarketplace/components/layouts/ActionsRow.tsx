import searchIcon from "../assets/searchIcon.png"

const ActionsRow = () => {
  return (
    <section className="flex gap-5">
      <form className="flex items-center min-w-[300px]  mx-auto relative">
        <input
          type="search"
          placeholder="Search"
          className="w-full pl-3 py-1.5  rounded-full border border-gray-500"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <img className=" w-5 h-5" src={searchIcon} alt="search" />
        </span>
      </form>
      <button className="px-[18px] min-w-28 rounded-full text-gray-200 active:text-white active:font-bold text-sm bg-[#3D00B7]">Upload</button>
      <button className="px-[18px] min-w-28 rounded-full text-[#3D00B7] text-sm font-bold active:bg-[#3D00B7] active:text-white active:border-transparent border-2 border-[#3D00B7]">Connect wallet</button>
    </section>
  );
};

export default ActionsRow;
