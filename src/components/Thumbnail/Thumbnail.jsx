import React from "react";

export default function Thumbnail({user, setSelectedUser}) {
  return (
    <div className="w-[20vw]">
      <img src={user.thumbnailUrl} alt="thumbnail"></img>
      <p>{user.id}</p>
      <p>{user.title}</p>
      <div
        className="w-[10vw] h-8 bg-black text-white"
        onClick={() => {
          setSelectedUser(user);
        }}
      >
        Open
      </div>
    </div>
  );
}
