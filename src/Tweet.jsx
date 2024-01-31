export default function Tweet({unTweet}) {

  const objet =  {
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
  }

  return (
   <>

    <div className="flex gap-4">
      <div>
        <img src= {unTweet.author_avatar} className="rounded-full w-10 h-10"/>
      </div>
      <div className=" ml-4 mt-4">
        <div className="flex pb-6">
          <h2 className="font-bold">{unTweet.source}</h2>
          <img src="src/assets/Verified.svg" alt="" className="w-7 h-7"/>
        </div>
        <p>{unTweet.text}</p>
        {
          unTweet.image && <img  src = {unTweet.image} className="w-full rounded-3xl object-cover h-60 "/>

        }
        <div className="flex gap-10 pb-7 pt-7 ">
          <div className="">
          <img src="src/assets/Reply.svg" alt=""/>
          </div>
          <span className="">0</span>
          <img src="src/assets/Retweet.svg" alt="" />
          <span>0</span>
          <img src="src/assets/React.svg" alt="" />
          <span>0</span>
          <img src="src/assets/Share.svg" alt="" />
        </div>
      </div>
    </div>
     </>
  );
}
