import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Jumbotron from "../../components/Layouts/Modules/Jumbotron";
import SectionDownload from "../../components/Layouts/Modules/SectionContents/SectionDownload";
import SectionEnjoy from "../../components/Layouts/Modules/SectionContents/SectionEnjoy";

function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
    </DefaultLayout>
  );
}

export default Landing;
