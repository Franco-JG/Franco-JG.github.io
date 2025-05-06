import Welcome from "../components/Welcome";
import BannerProfile from "../components/BannerProfile";
import Contact from "../components/Contact";
import Projects from "../components/Projects";


const Home = () => {
  return (
    <>
        <section id="home">
          <Welcome  />
        </section>
        <section id="profile">
          <BannerProfile />
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="contact">
          <Contact />
        </section>
    </>
  );
};

export default Home;