import "./App.css";
import { useState, useEffect } from "react";
import { getArticle } from "./Utils/getArticle";
import WebTitle from "./Components/WebTitle";
import Articles from "./Components/Article";
import useArticle from "./hooks/useArticle";

function App() {
  const { article } = useArticle()

  return (
    <main>
      <WebTitle titleProp="Netflix" description="Ini adalah website netflix" />
      <Articles title={article.title} description={article.body} />
    </main>
  );
}

export default App;
