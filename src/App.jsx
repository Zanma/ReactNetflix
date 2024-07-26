import "./App.css";
import { useState, useEffect } from "react";
import { getArticle } from "./Utils/getArticle";
import WebTitle from "./Components/WebTitle";
import Articles from "./Components/Article";

function App() {
  const [article, setArticle] = useState("");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    getArticle(counter).then((data) => setArticle(data));
  }, [counter]);

  function nextArticle() {
    setCounter(counter + 1);
  }

  function prevArticle(props) {
    console.log(props);
    setCounter(counter - 1);
  }

  function LimitArticle() {
    return (
      <div>
        <h3>Ini adalah limit article !</h3>
      </div>
    );
  }

  return (
    <main>
      <WebTitle titleProp="Netflix" description="Ini adalah website netflix" />
      <Articles title={article.title} description={article.body} />
      {/* {counter === 4 && <LimitArticle />}
      <button onClick={() => prevArticle("Hello World")}>Prev Article</button>
      {counter}
      <button onClick={nextArticle}>Next Article</button> */}
    </main>
  );
}

export default App;
