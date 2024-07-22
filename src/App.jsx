import "./App.css";
import { useState, useEffect } from "react";

function WebTitle({ titleProp, description }) {
  const [title, setTitle] = useState(titleProp);

  function changeTitle() {
    setTitle("Netflix 2.0");
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={changeTitle}>Ganti Judul</button>
    </div>
  );
}

function Articles({ title, description }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function App() {
  const [article, setArticle] = useState("");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + counter)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [counter]);

  function nextArticle() {
    setCounter(counter + 1);
  }

  function prevArticle() {
    setCounter(counter - 1);
  }

  return (
    <main>
      <WebTitle titleProp="Netflix" description="Ini adalah website netflix" />
      <Articles title={article.title} description={article.body} />
      <button onClick={prevArticle}>Next Article</button>
      {counter}
      <button onClick={nextArticle}>Next Article</button>
    </main>
  );
}

export default App;
