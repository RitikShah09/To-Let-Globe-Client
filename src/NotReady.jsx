import { useEffect } from 'react';
import axios from 'axios';

function NotReady() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/user");
        console.log(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run only on mount

  return (
    <>
      <div className="text-yellow-500">
        This Page is not ready yet
      </div>
    </>
  );
}

export default NotReady;
