import CategoriesPage from "../categoriesPage/categoriesPage";
import Carousal from "../navbar/carousal";
import Navbar from "../navbar/navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <CategoriesPage />
      <Carousal />
    </div>
  );
};

export default Homepage;
