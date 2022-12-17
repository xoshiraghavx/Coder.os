import "./MainPage.css";
import FilterSection from "./Filter/FilterSection";
import QuestionBank from "./Questions/QuestionBank";
import NavBar from "../NavBar/Navbar";
import Loading from "../Loading/Loading";

function MainPage() {
  return (
    <div>
      <Loading />
      <NavBar />
      <div className="main-section">
        <FilterSection />
        <QuestionBank />
      </div>
    </div>
  );
}

export default MainPage;
