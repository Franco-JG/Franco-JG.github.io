import Welcome from "../components/Welcome";
import Lorem from "../components/Lorem";
import BannerProfile from "../components/BannerProfile";
import Contact from "../components/Contact";


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
          <Lorem lorems={6}/>
        </section>
        <section id="contact">
          <Contact />
        </section>
    </>
  );
};

export default Home;