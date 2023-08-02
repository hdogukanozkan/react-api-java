import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  const [apiJava, setApiJava] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(baseURL);
      setApiJava(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {apiJava?.map((item) => {
        return (
          <div className="my-4">
            <p>{JSON.stringify(item)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
