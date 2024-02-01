export default function FollowTeet() {
  return (
    <div className=" text-white flex pt-4 ">
      <div className="trend_follow w-2/12">
        <div className="sticky left-0 top-1 et right-0">
          <div className="flex bg-gray-800 rounded-lg pl-4 gap-4">
            <img src="src/assets/Search.svg" alt="#" />
            <input
              className=" bg-gray-800 "
              type="text"
              placeholder="Serach Twitter"
            />
          </div>
          <div className=" h-144 mt-4 bg-gray-800 rounded-xl ">
            <div className="flex gap-[40%]">
              <p className="pt-4 pl-4">Trends for you</p>
              <Icon src="src/assets/Settings.svg" className="" />
            </div>
            <div className="pl-4">
              <Trend_Tweet text="#SQUID" />
              <Trend_Tweet text="Gra'Nzumba" />
              <Trend_Tweet text="Top-Congo" />
              <button className="text-blue-500 font-bold pt-6">
                Show more
              </button>
            </div>
          </div>
          <div className=" h-72 pt-3 rounded-xl bg-gray-800 mt-4  ">
            <p className="font-bold pl-8">Who to follow</p>
            <Follow name="" />
            <Follow name="" />
            <Follow name="" />
          </div>
          <Likes />
        </div>
      </div>
    </div>
  );
}
