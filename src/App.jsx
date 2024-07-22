import "./App.css";
import { useState } from "react";

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
  console.log(title, description);
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <WebTitle titleProp="Netflix" description="Ini adalah website netflix" />
      <Articles
        title="Artikel Pertama"
        description="Ini adalah artikel pertama"
      />
    </main>
  );
}

export default App;
