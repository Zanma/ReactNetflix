import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Jumbotron from "../../components/Layouts/Modules/Jumbotron";
import SectionEnjoy from "../../components/Layouts/Modules/SectionContents/SectionEnjoy";

function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
    </DefaultLayout>
  );
}

export default Landing;
