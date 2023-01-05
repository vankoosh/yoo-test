import { useEffect, useState } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import Album from "../Album/Album";
import { v4 as uuid } from "uuid";

export default function Viewer() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  console.log(selectedUser.url)

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        const firstTenData = data.slice(0, 10);
        setData(firstTenData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-3">
        {data.map((user) => {
          return (
            <Thumbnail
              user={user}
              key={uuid()}
              setSelectedUser={setSelectedUser}
            />
          );
        })}
      </div>
      <div>
        {selectedUser ? (
          <Album selectedUser={selectedUser} />
        ) : (
          <h1>Please select a photo</h1>
        )}
      </div>
    </div>
  );
}
