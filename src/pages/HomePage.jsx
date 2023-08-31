import About from "../components/about/About";
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
    </>
  );
};

export default HomePage;
