import React from "react";

export default function Thumbnail({ user, setSelectedUser }) {
  console.log("thumbnail rendered")
  return (
    <div className="w-[10vw] outline outline-1 p-4">
      <img src={user.thumbnailUrl} alt="thumbnail"></img>
      <p>{user.id}</p>
      <p>{user.title}</p>
      <div
        className="w-[5vw] h-8 bg-black text-white hover:cursor-pointer"
        onClick={() => {
          setSelectedUser(user);
        }}
      >
        Open
      </div>
    </div>
  );
}
