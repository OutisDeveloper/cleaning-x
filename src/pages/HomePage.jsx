import About from "../components/about/About";
import Article from "../components/article/Article";
import Contact from "../components/contact/Contact";
import Covid from "../components/covid/Covid";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Info from "../components/info/Info";
import Service from "../components/service/Service";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Covid />
      <Article />
      <Contact />
      <Info />
    </>
  );
};

export default HomePage;
