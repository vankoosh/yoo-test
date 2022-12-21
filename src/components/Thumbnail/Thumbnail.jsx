import React from "react";

export default function Thumbnail({user, setSelectedUser}) {
  return (
    <div>
      <img src={user.thumbnailUrl}></img>
      <p>{user.id}</p>
      <p>{user.title}</p>
      <div
        onClick={() => {
          setSelectedUser(props.id);
        }}
      >
        Open
      </div>
    </div>
  );
}
