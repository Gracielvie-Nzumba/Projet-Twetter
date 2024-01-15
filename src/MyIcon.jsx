export default function MyIcon(props) {
  return (
    <>
      <div>
        <p className={props.titre}></p>
        <img src={props.icon} alt={props.styleName} />
      </div>
    </>
  );
}
