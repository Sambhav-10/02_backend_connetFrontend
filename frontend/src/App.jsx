import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get("/api/joke").then((responce) => {
      // console.log(responce);
      setJokes(responce.data);
    });
  }, []);

  return (
    <>  
      <h1>Jokes</h1>
      <p>jokes : {jokes.length}</p>

      {jokes.map((e) => {

        return (
          <>
            <div key={e.id}>
              <h5>{e.title}</h5>
              <h5>{e.content}</h5>
            </div>
          </>
        );
      })}

    </>
  );
}

export default App;
