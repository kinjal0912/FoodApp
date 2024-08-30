import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import RestaurantsPage from "./Restaurant";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <RestaurantsPage />
    </>
  );
};

export default HomePage;
