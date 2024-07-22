import "./App.css";

function WebTitle({ title }) {
  return <h1>{title}</h1>;
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
      <WebTitle title="Netflix" />
      <Articles
        title="Artikel Pertama"
        description="Ini adalah artikel pertama"
      />
    </main>
  );
}

export default App;
