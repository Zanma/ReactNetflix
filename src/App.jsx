import "./App.css";

function WebTitle() {
  return <h1>Netflix Clone</h1>;
}

function Articles() {
  return (
    <article>
      <h3>Artikel Pertama</h3>
      <p>Ini adalah artikel pertama</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <WebTitle />
      <Articles />
    </main>
  );
}

export default App;
