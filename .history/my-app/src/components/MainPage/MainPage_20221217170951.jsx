import "./MainPage.css";
import FilterSection from "./FilterSection";
import QuestionBank from "./QuestionBank";
import NavBar from "../NavBar/Navbar";
import Loading from "../Loading/Loading";

function MainPage() {
  return (
    <div>
      <NavBar />
      <div className="main-section">
        <FilterSection />
        <QuestionBank />
      </div>
    </div>
  );
}

export default MainPage;
