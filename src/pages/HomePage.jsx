import About from "../components/about/About";
import Covid from "../components/covid/Covid";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Service from "../components/service/Service";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Covid />
    </>
  );
};

export default HomePage;
