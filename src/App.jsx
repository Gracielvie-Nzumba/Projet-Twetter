import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Input_Tweet from './Input_Tweet';
import Icon from './Icon';
import Button from './Button';
import Tweet from './Tweet';
import MyIcon from './MyIcon';
import Trend_Tweet from './Trend_Tweet';
import Follow from './Follow';
import { array } from './TabTweet';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className=" text-white flex pt-4 ">
        <div className="w-3/12">
          <div>
            <div className="fixed left-[10%] top-1 right-0">
              <Icon src="src/assets/Twitter.svg" />
              <Link to="/">
                <Icon
                  src="src/assets/Home.svg"
                  text="Home"
                  styleName="display gap-10 flex"
                />
              </Link>
              <Icon src="src/assets/Explore.svg" text="Explore" />
              <Icon src="src/assets/Notifications.svg" text="Notification" />
              <Icon src="src/assets/Messages.svg" text="Message" />
              <Icon src="src/assets/Bookmarks.svg" text="Bookmarks" />
              <Icon src="src/assets/Lists.svg" text="Lists" />
              <Link to="/profil">
                <Icon src="src/assets/Profile.svg" text="Profil" />
              </Link>
              <Icon src="src/assets/More.svg" text="More" />
              <div className="pt-4">
                <Button className={'button'} type="text" name="Tweet" />
              </div>
              <div>
                <div className="flex pt-20">
                  <Icon src="src/assets/Profile-Photo.svg" />
                  <div>
                    <h4 className="pt-6">Gracevie Nzumba</h4>
                    <small>@gracevie_2020</small>
                    <span className="pr-4">...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
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
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
function Home() {
  return (
    <div className="w-4/12 border border-slate-800 ">
      <Header
        title="Home"
        src="src/assets/Timeline-Prop.svg"
        styleName="flex"
      />
      <div styleName="flex border-b border-t border-slate-800 ">
        <div className="flex flex-row">
          <img
            className="mb-10"
            src="src/assets/Profile-Photo.svg"
            styleName="w-10 h-10 "
          />
          <div className="flex flex-col">
            <textarea
              id="#"
              cols="35"
              placeholder="What's happening?"
              rows="1"
              className="mt-5"
            ></textarea>

            <div className="flex flex-row justify-between ">
              <div className="gap-2 flex">
                <Icon src="src/assets/Media.svg" />
                <Icon src="src/assets/Gif.svg" />
                <Icon src="src/assets/Poll.svg" />
                <Icon src="src/assets/Emoji.svg" />
                <Icon src="src/assets/Schedule.svg" />
              </div>
              <Button btn="mt-3" type="text" name="Tweet" />
            </div>
          </div>
        </div>
      </div>

      <div>
        {array.map((arry) => (
          <Tweet unTweet={arry} />
        ))}
      </div>
    </div>
  );
}
function Profil() {
  return (
    <div className="w-5/12">
      <div className="">
        <h1>Gracevie Nzumba</h1>
        <small>0 poste</small>
      </div>
      <div className="flex justify-between mt-10">
        <img
          src="src/20221008_120444.jpg"
          className="rounded-full w-20 h-20 "
        />
        <button type="button" className="">
          Edit profile
        </button>
      </div>
      <div>
        <p>Gracevie Nzumba</p>
        <small>@gracevie_2020</small>
      </div>
      <div className="flex mt-8">
        <img src="src/assets/Schedule.svg" alt="" />
        <h2>Joined January 2024</h2>
      </div>
      <div className="flex gap-4 mt-4">
        <div>
          <span className="">0</span>
          <span className="ml-2">Following</span>
        </div>
        <div>
          <span>0</span>
          <span className="ml-2">Following</span>
        </div>
      </div>
      <div className="flex justify-between border-b mt-8">
        <div>
          <span>Posts</span>
        </div>
        <div>
          <span>Replies</span>
        </div>
        <div>
          <span>Highlights</span>
        </div>
        <div>
          <span>Media</span>
        </div>
        <div>
          <span>Likes</span>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-bold mt-6">Who to follow</h1>
        </div>
        <div className="flex justify-between ">
          <div className="flex pt-20">
            <img
              src="Tweet/Body/pains-cmohamed-hassouna-1024x683.jpg"
              className="rounded-full w-10 h-10"
              alt=""
            />
            <div>
              <h4 className="pt-2 ml-2">GloDi Kalombo</h4>
              <small>@Master-GK</small>
            </div>
          </div>
          <button type="submit" className="">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
