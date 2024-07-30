import "../App.css";
import WebTitle from "../Components/WebTitle";
import Articles from "../Components/Article";
import useArticle from "../hooks/useArticle";

function Home() {
  const { article } = useArticle()

  return (
    <main>
      <WebTitle titleProp="Netflix" description="Ini adalah website netflix" />
      <Articles title={article.title} description={article.body} />
    </main>
  );
}

export default Home;
