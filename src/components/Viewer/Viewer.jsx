import { useEffect, useState } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";

export default function Viewer() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  // const firstTen = (data) => {
  //   console.log(data.slice(0, 10));
  // };

  // firstTen(data);

  console.log(error)

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setData(data);
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
  if (data) {
    console.log(data)
  }

  
  data.map((user) => {
    return <Thumbnail user={user} setSelectedUser={setSelectedUser} />;
  });

  <Album user={selectedUser} />

}
