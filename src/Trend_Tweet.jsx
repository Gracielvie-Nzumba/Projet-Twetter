export default function Trend_Tweet(props) {
  return (
    <>
      <div className={props.text}>
        <div className="">
          <div className="">
            <small className="small">Trending in Turkey</small>
            <p className={props.titre} styleName="SQUID">
              #SQUID
            </p>
            <small className="small">2,066 Tweets</small>
          </div>
        </div>
        <div className="">
          <small className="small font-bold" >Trending in Turkey</small>
          <p className={props.titre} styleName="SQUID">
            #SQUID
          </p>
          <small className="small font-bold">2,066 Tweets</small>
        </div>
        <div className="">
          <small className="small font-bold">Trending in Turkey</small>
          <p className={props.titre} styleName="SQUID">
            #SQUID
          </p>
          <small className="small">2,066 Tweets</small>
        </div>
        <div>
            <button className="show_m font-bold">Show more</button>
        </div>
      </div>
    </>
  );
}
