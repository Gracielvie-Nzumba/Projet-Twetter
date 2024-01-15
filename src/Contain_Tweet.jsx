import Tweet from './Tweet';

export default function Contain_Tweet(props) {
  return (
    <>
      <Tweet titre="Gra'Nzumba" />
      <div>
        <img src={props.srcTweet} alt="" />
      </div>
      <div className="flex gap-[20%]">
        <div className="flex gap-4">
          <img src="src/assets/Reply.svg" alt="#" />
          <span>22</span>
        </div>
        <div className="flex gap-4">
          <img src="src/assets/Retweet.svg" alt="#" />
          <span>553</span>
        </div>
        <div className="flex gap-4">
          <img src="src/assets/React.svg" alt="#" />
          <span>110</span>
        </div>
        <img src="src/assets/Share.svg" alt="#" />
      </div>
    </>
  );
}
