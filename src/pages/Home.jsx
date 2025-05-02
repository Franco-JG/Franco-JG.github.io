import Welcome from "../components/Welcome";
import Lorem from "../components/Lorem";
import { Suspense } from "react";
import BannerProfile from "../components/BannerProfile";


const Home = () => {
  return (
    <>
        <section id="home">
          <Suspense fallback={null}>
              <Welcome  />
          </Suspense>
        </section>
        <section id="profile">
          <BannerProfile />
        </section>
        <section id="projects">
          <Lorem lorems={2}/>
        </section>
        <section id="contact">
          <Lorem />
        </section>
    </>
  );
};

export default Home;