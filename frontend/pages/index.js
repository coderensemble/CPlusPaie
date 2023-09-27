import Home from "../components/Home";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Temoignages from "../components/Temoignages";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";

function Index() {
  return (
    <div>
      <Home />
      <Question />
      <Temoignages />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
