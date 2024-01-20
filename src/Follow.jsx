import Icon from './Incon';
import Tweet from './Tweet';
import Button from './Button';
export default function Follow(props) {
  return (
    <>
      {/* <div className='who_tofollo'>
        <p>Who to follow</p>
      </div> */}
      <h2>{props.name}</h2>
      <div className="flex gap-4 p-2">
        <img
          className="rounded-full w-10 h-10 mt-4"
          src="Tweet/Body/Snapchat-411377971.jpg"
          alt=""
        />
        <div className="flex gap-2">
          <div className={props.names}>
            <div className="flex gap-1">
              <p className="pt-4">Gracielvie'N</p>
              <Icon className="pb-2 fixed" src="src/assets/Verified.svg" />
            </div>
            <small>@nytimes</small>
          </div>
          <div className=''>
          <button className='btn mt-4 text-black ml-4'>Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}
