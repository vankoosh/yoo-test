
export default function Album({ url }) {
  console.log("thumbnail rendered")
  return (
    <div className="">
      <img src={url} alt="" />
      {/* <p>{}</p> */}
    </div>
  );
}