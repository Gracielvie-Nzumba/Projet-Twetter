export default function Tweet(props) {
  return (
    <>
      <div className="flex gap-4 p-2">
        <img
          className="rounded-full w-10 h-10"
          src="Tweet/Body/pains-cmohamed-hassouna-1024x683.jpg"
        />
        <div>
          <div className="flex">
            <h2>{props.titre}</h2>
            <img src="src/assets/Verified.svg" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            ipsam quis minima ducimus suscipit natus quia illo nesciunt quos,
            aliquam eaque accusantium repudiandae, cum sit cumque blanditiis
            nulla architecto impedit.
          </p>
        </div>
      </div>
    </>
  );
}
