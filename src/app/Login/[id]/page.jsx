export default function URLDetails({ params }) {
  const id = params.id;

  return (
    <div>
      Using dynamic segment where param = {id} <br />{" "}
    </div>
  );
}
