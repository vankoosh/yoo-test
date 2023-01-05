
export default function Album({ selectedUser }) {
  return (
    <div className="w-[50vw] h-full bg-slate-600">
      <img src={selectedUser.url} alt="" />
      {/* <p>{}</p> */}
    </div>
  );
}