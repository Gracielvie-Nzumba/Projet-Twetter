import { Link } from "react-router-dom";

export default function Icon(props) {
  return (
    <Link to = {props.Icon}>
      <div className="flex gap-3.5 pt-4">
        <img src={props.src} alt={props.styleName} />
        {props.text}
      </div>
    </Link>
  );
}
