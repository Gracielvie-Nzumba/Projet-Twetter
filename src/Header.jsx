export default function Header(props) {
  return (
    <div className="">
      <div className={props.styleName}>
        <h1 className="font-bold">{props.title}</h1>
        <img className="w-6" src={props.src} alt="#" />
      </div>
    </div>
  );
}
