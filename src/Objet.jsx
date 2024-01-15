export default function Objet() {
  const object = 
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
    }

    return (
      <div className='flex p-4 mt-4 text-white'>
        <div className=''>
          <img className='h-18 w-24 rounded-full' src={MyTweet.author_avatar} alt="image" />
        </div>
        <div className='ml-6'>
          <h2>{MyTweet.source} <small>{MyTweet.date}</small></h2>
          <Paraph name={MyTweet.text} />
          <img className='pt-2 rounded-3xl' src={MyTweet.image} alt="" />
          <div className='flex pt-5 justify-between'>
            <Myicoment src="src/assets/Reply.svg" name={MyTweet.replies} />
            <Myicoment src="src/assets/Retweet.svg" name={MyTweet.retweets} />
            <Myicoment src="src/assets/React.svg" name={MyTweet.favorites} />
            <Myicoment src="src/assets/Share.svg" name="" />
          </div>
        </div>
      </div>
  )
  
}

