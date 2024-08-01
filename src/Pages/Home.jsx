import "../App.css";
import Layout from "../components/Layout";
import { useAtom } from "jotai";
import { languageAtom } from "../jotai/atoms";

function Home() {
  const [language] = useAtom(languageAtom);
  console.log(language);

  return (
    <Layout>
      <h3>
        {language === "en" ? "Watch Netflix Free!" : "Tonton Netflix Gratis"}
      </h3>
    </Layout>
  );
}

export default Home;
