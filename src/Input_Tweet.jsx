export default function Section(props) {
  return (
    <div>
      <section className={props.styleName}>
        {props.children}
      </section>
    </div>
  );
}
