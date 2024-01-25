import Icon from './Incon';
import Tweet from './Tweet';
import Button from './Button';
export default function Follow(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <div className="flex gap-4 p-2">
        <img
          className="rounded-full w-10 h-10 mt-4"
          src="Tweet/Body/Snapchat-411377971.jpg"
          alt=""
        />
        <div className="flex gap-[40%]">
          <div className={props.names}>
            <div className="flex gap-1">
              <p className="pt-4">Gracielvie'N</p>
              <Icon className="pb-2 fixed" src="src/assets/Verified.svg" />
            </div>
            <small>@nytimes</small>
          </div>
          <div className='mt-6'>
          <button className='btn  text-black '>Follow</button>
          </div>
        </div>
      </div>
    </>
  );
}
