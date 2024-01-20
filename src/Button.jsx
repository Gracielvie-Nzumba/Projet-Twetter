export default function Button(props) {
  return (
    <div>
    <div className={props.btn}>
      <button className="button font-bold">Tweet</button>
    </div>
      <span className={props.src}></span>
    </div>
  );
}
