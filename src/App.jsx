import {
  BrowserRouter as Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Input_Tweet from './Input_Tweet';
import Icon from './Incon';
import Button from './Button';
import Tweet from './Tweet';
import MyIcon from './MyIcon';
import Trend_Tweet from './Trend_Tweet';
import Follow from './Follow';
function App() {
  const [count, setCount] = useState(0);
  const array = [
    {
      author_avatar: 'https://picsum.photos/200?random=1604299903000',
      source: 'Twitter',
      date: 1604299903000,
      favorites: '92746',
      id: '1323155810910982145',
      isVerified: true,
      replies: '24785',
      retweets: '16287',
      text: '...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1609942590000',
      source: 'Apple',
      date: 1609942590000,
      favorites: '396603',
      id: '1346822958006886400',
      isVerified: false,
      replies: '896',
      retweets: '54694',
      text: 'Even Mexico uses Voter I.D.',
      image: 'https://picsum.photos/1024/200?random=1346822958006886400',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1604231375000',
      source: 'Twitter for iPhone',
      date: 1604231375000,
      favorites: '124689',
      id: '1322868385361891328',
      isVerified: true,
      replies: '8',
      retweets: '22972',
      text: 'When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...',
      image: 'https://picsum.photos/200/800?random=1322868385361891328',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1604084613000',
      source: 'CNN',
      date: 1604084613000,
      favorites: '44842',
      id: '1322252819299135488',
      isVerified: false,
      replies: '1024',
      retweets: '9563',
      text: '...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...',
      image: 'https://picsum.photos/200?random=1322252819299135488',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1603037689000',
      source: 'Trump D.',
      date: 1603037689000,
      favorites: 62414,
      id: '1317861704819118080',
      isVerified: false,
      replies: '258',
      retweets: 16811,
      text: 'Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1602377246000',
      source: 'Lauraine L.',
      date: 1602377246000,
      favorites: 34952,
      id: '1315091604496158720',
      isVerified: true,
      replies: '85',
      retweets: 10008,
      text: 'Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB',
      image: 'https://picsum.photos/200?random=1315091604496158720',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1601996447000',
      source: 'Mexico City',
      date: 1601996447000,
      favorites: 58201,
      id: '1313494418314457090',
      isVerified: true,
      replies: '0',
      retweets: 14359,
      text: 'NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1554075712000',
      source: 'New York Times',
      date: 1554075712000,
      favorites: 58201,
      id: '1313494418314457090',
      isVerified: true,
      replies: '0',
      retweets: 14359,
      text: '....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border.......',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1604231375000',
      source: 'Twitter for iPhone',
      date: 1601996447000,
      favorites: 58201,
      id: '1313494418314457090',
      isVerified: true,
      replies: '0',
      retweets: 14359,
      text: 'A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle',
    },
    {
      author_avatar: 'https://picsum.photos/200?random=1548956601000',
      source: 'Samsung',
      date: 1601996447000,
      favorites: 58201,
      id: '1313494418314457090',
      isVerified: true,
      replies: '0',
      retweets: 14359,
      text: 'A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle',
      image: 'https://picsum.photos/2048/1024?random=1313494418314457090',
    },
  ];

  return (
    <div className=" text-white flex pt-4 ">
      <div className="w-3/12">
        <div>
          <div className="fixed left-[10%] top-1 right-0">
            <Icon src="src/assets/Twitter.svg" />
            <Icon
              src="src/assets/Home.svg"
              text="Home"
              styleName="display gap-10 flex"
            />
            <Icon src="src/assets/Explore.svg" text="Explore" />
            <Icon src="src/assets/Notifications.svg" text="Notification" />
            <Icon src="src/assets/Messages.svg" text="Message" />
            <Icon src="src/assets/Bookmarks.svg" text="Bookmarks" />
            <Icon src="src/assets/Lists.svg" text="Lists" />
            <Icon src="src/assets/Profile.svg" text="Profil" />
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
      <div className="w-4/12 border border-slate-800 ">
        <Header
          title="Home"
          src="src/assets/Timeline-Prop.svg"
          styleName="flex justify-between flex-row border-b "
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
  );
}


export default App;
