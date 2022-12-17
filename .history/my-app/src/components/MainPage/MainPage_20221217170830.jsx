import "./MainPage.css";
import FilterSection from "./FilterSection";
import QuestionBank from "./QuestionBank";
import NavBar from "../NavBar/Navbar";
import Loading from "../loading/loading";

function MainPage() {
  return (
    <Loading />
    <div>
            <div className="loader-container">
        <div className="spinner"></div>
      </div>
      <NavBar />
      <div className="main-section">
        <FilterSection />
        <QuestionBank />
      </div>
    </div>
  );
}

export default MainPage;
