import Welcome from "../components/Welcome";
import Lorem from "../components/Lorem";
import { Suspense } from "react";
import BannerProfile from "../components/BannerProfile";


const Home = () => {
  return (
    <>
        <Suspense fallback={null}>
            <Welcome  />
        </Suspense>
        <BannerProfile/>
        <Lorem lorems={3}/>
    </>
  );
};

export default Home;