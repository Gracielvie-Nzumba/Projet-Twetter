export default function Trend_Tweet(props) {
  return (
    <div>
      <div>
        <div>
          <div>
            <small className={props.small}>Trending in Turkey</small>
            <p>{props.text}</p>
            <small className={props.small}>2,066 Tweets</small>
          </div>
          <div>
            <img src={props.scr} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
